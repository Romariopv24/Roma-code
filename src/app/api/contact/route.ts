import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createHmac, timingSafeEqual } from 'crypto';

// ─── CAPTCHA helpers (stateless — works on Vercel serverless) ────────────────
const CAPTCHA_SECRET = process.env.CAPTCHA_SECRET || 'roma-code-captcha-secret-2024';
const CAPTCHA_TTL_MS = 10 * 60 * 1000; // 10 minutes

function signCaptcha(answer: number, expiresAt: number): string {
  const payload = `${answer}:${expiresAt}`;
  const sig = createHmac('sha256', CAPTCHA_SECRET).update(payload).digest('hex');
  return Buffer.from(`${payload}:${sig}`).toString('base64url');
}

function verifyCaptchaToken(token: string): { answer: number; expiresAt: number } | null {
  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf8');
    const parts = decoded.split(':');
    if (parts.length !== 3) return null;

    const [answerStr, expiresAtStr, sig] = parts;
    const payload = `${answerStr}:${expiresAtStr}`;
    const expectedSig = createHmac('sha256', CAPTCHA_SECRET).update(payload).digest('hex');

    const sigBuf = Buffer.from(sig, 'hex');
    const expectedBuf = Buffer.from(expectedSig, 'hex');
    if (sigBuf.length !== expectedBuf.length) return null;
    if (!timingSafeEqual(sigBuf, expectedBuf)) return null;

    return { answer: parseInt(answerStr, 10), expiresAt: parseInt(expiresAtStr, 10) };
  } catch {
    return null;
  }
}

// ─── GET /api/contact → generate a captcha challenge ────────────────────────
export async function GET() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const ops = [
    { symbol: '+', answer: a + b },
    { symbol: '×', answer: a * b },
  ];
  const op = ops[Math.floor(Math.random() * ops.length)];

  const expiresAt = Date.now() + CAPTCHA_TTL_MS;
  const token = signCaptcha(op.answer, expiresAt);
  const question = `${a} ${op.symbol} ${b}`;

  return NextResponse.json({ token, question });
}

// ─── POST /api/contact → validate captcha + send email via Resend ────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message, captchaToken, captchaAnswer } = body;

    // --- Validate required fields ---
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'La dirección de correo no es válida.' },
        { status: 400 }
      );
    }

    // --- Validate CAPTCHA (stateless) ---
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'El CAPTCHA es requerido.' },
        { status: 400 }
      );
    }

    const captchaData = verifyCaptchaToken(captchaToken);
    if (!captchaData) {
      return NextResponse.json(
        { error: 'El CAPTCHA no es válido. Por favor recárgalo e inténtalo de nuevo.' },
        { status: 400 }
      );
    }
    if (captchaData.expiresAt < Date.now()) {
      return NextResponse.json(
        { error: 'El CAPTCHA ha caducado. Por favor recárgalo e inténtalo de nuevo.' },
        { status: 400 }
      );
    }
    if (parseInt(captchaAnswer, 10) !== captchaData.answer) {
      return NextResponse.json(
        { error: 'Respuesta de CAPTCHA incorrecta. Inténtalo de nuevo.' },
        { status: 400 }
      );
    }

    // --- Send email via Resend ---
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured.');
      return NextResponse.json(
        { error: 'El servidor de correo no está configurado. Contacta al administrador.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const targetEmail = process.env.EMAIL_TO || 'rparradev24@gmail.com';

    const { error: resendError } = await resend.emails.send({
      from: 'Roma Code Portfolio <onboarding@resend.dev>',
      to: [targetEmail],
      reply_to: email,
      subject: `📬 Nuevo mensaje de ${name} — Roma Code Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e0e3e5; border-radius: 16px; padding: 32px;">
          <h2 style="color: #a5c8ff; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <p><strong>De:</strong> ${name} (&lt;${email}&gt;)</p>
          <p><strong>Mensaje:</strong></p>
          <blockquote style="background: rgba(255,255,255,0.05); padding: 16px; border-left: 4px solid #a5c8ff; border-radius: 8px;">
            ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
          </blockquote>
        </div>
      `,
    });

    if (resendError) {
      console.error('Resend error:', resendError);
      return NextResponse.json(
        { error: `Error al enviar correo: ${resendError.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '¡Correo enviado con éxito!',
    });

  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Contact route error:', errMessage);
    return NextResponse.json(
      { error: `Error al enviar correo: ${errMessage}` },
      { status: 500 }
    );
  }
}
