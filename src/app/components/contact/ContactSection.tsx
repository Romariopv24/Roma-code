'use client'
import React from 'react'

export const ContactSection = () => {
  const email = "rparradev24@gmail.com";

  return (
    <div className="py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-4xl text-center font-semibold tracking-tight text-pretty text-bluetext font-poppins sm:text-5xl lg:text-balance">
        Ready to Connect?
        </p>
        <p className="mt-6 text-lg/8 font-poppins text-center">
       and take your digital presence to the Next level? Reach out to me and let´s discuss how I can help you achieve your goals.
        </p>
      </div>
      <div className='flex justify-center items-center mt-8'>
    <a
      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md bg-bluetext px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1a6bbf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
     Let&#39;s get in touch
    </a>
    </div>
</div>
    </div>

  )
}