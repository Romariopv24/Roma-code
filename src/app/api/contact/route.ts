import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// ─── CAPTCHA Store (in-memory, per server instance) ────────────────────────
const captchaStore = new Map<string, {
  question: string;
  answer: number;
  expiresAt: number;
}>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of captchaStore) {
    if (val.expiresAt < now) captchaStore.delete(key);
  }
}, 5 * 60 * 1000);

// ─── GET /api/contact → generate a captcha challenge ───────────────────────
export async function GET() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const ops = [
    { symbol: '+', answer: a + b },
    { symbol: '×', answer: a * b },
  ];
  const op = ops[Math.floor(Math.random() * ops.length)];

  const token = crypto.randomUUID();
  const question = `${a} ${op.symbol} ${b}`;

  captchaStore.set(token, {
    question,
    answer: op.answer,
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
  });

  return NextResponse.json({ token, question });
}

// ─── POST /api/contact → validate captcha + send email ─────────────────────
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

    // --- Validate CAPTCHA ---
    const entry = captchaStore.get(captchaToken);
    if (!entry) {
      return NextResponse.json(
        { error: 'El CAPTCHA ha expirado o no es válido. Por favor recárgalo e inténtalo de nuevo.' },
        { status: 400 }
      );
    }
    if (entry.expiresAt < Date.now()) {
      captchaStore.delete(captchaToken);
      return NextResponse.json(
        { error: 'El CAPTCHA ha caducado. Por favor recárgalo e inténtalo de nuevo.' },
        { status: 400 }
      );
    }
    if (parseInt(captchaAnswer, 10) !== entry.answer) {
      return NextResponse.json(
        { error: 'Respuesta de CAPTCHA incorrecta. Inténtalo de nuevo.' },
        { status: 400 }
      );
    }
    // Invalidate used captcha (one-time use)
    captchaStore.delete(captchaToken);

    const targetEmail = process.env.EMAIL_TO || 'rparradev24@gmail.com';
    const pass = process.env.EMAIL_PASS;
    const isCustomSmtpConfigured =
      pass &&
      pass !== 'your_gmail_app_password_here' &&
      pass.trim() !== '';

    // ─── STRATEGY 1: Custom SMTP if configured in .env.local ─────────────
    if (isCustomSmtpConfigured) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER || targetEmail,
          pass: process.env.EMAIL_PASS,
        },
        connectionTimeout: 5000,
        greetingTimeout: 5000,
        socketTimeout: 5000,
      });

      await transporter.sendMail({
        from: `"Roma Code Portfolio" <${process.env.EMAIL_USER || targetEmail}>`,
        to: targetEmail,
        replyTo: email,
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

      return NextResponse.json({
        success: true,
        message: '¡Correo enviado con éxito!',
      });
    }

    const requestOrigin =
      req.headers.get('origin') ||
      (req.headers.get('host') ? `https://${req.headers.get('host')}` : 'https://roma-code.vercel.app');

    const formSubmitUrl = `https://formsubmit.co/ajax/${targetEmail}`;

    const serviceResponse = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': requestOrigin,
        'Referer': `${requestOrigin}/`,
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `📬 Nuevo mensaje de ${name} — Roma Code Portfolio`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const serviceData = await serviceResponse.json();

    if (serviceResponse.ok && (serviceData.success === 'true' || serviceData.success === true)) {
      return NextResponse.json({
        success: true,
        message: '¡Mensaje enviado a tu correo rparradev24@gmail.com con éxito!',
      });
    } else if (serviceData.message?.includes('Activation')) {
      return NextResponse.json({
        success: true,
        message: 'FormSubmit ha enviado un correo de activación inicial a rparradev24@gmail.com. ¡Por favor revisa tu bandeja/spam y haz clic en Activar!',
      });
    } else {
      return NextResponse.json(
        { error: serviceData.message || 'Error al procesar el envío del correo.' },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Error desconocido';
    console.error('Contact route error:', errMessage);
    return NextResponse.json(
      { error: `Error al enviar correo: ${errMessage}` },
      { status: 500 }
    );
  }
}
