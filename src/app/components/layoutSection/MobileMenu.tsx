'use client'
import { rootImages } from '@/app/core/rootImages';
import React, { useState } from 'react'

export const MobileMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <>
       <div className="flex lg:hidden">
        <button type="button" onClick={toggleMenu} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
          <span className="sr-only">Open main menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>  
      <div className={`lg:hidden fixed inset-0 z-50 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`} role="dialog" aria-modal="true">
    {/* Background backdrop, show/hide based on slide-over state. */}
    <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5 flex flex-row align-center items-center gap-x-2.5 ">
          <img className="h-8 w-auto" src={rootImages.logo} alt="Roma-Code" />
          <h3 className="text-white text-xl font-semibold">Roma Code</h3>
        </a>
        <button type="button" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-white">
          <span className="sr-only">Close menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-[#1a6bbf] hover:text-white">About Me</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-[#1a6bbf] hover:text-white">Skills</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-[#1a6bbf] hover:text-white">Services</a>
          </div>
          <div className="py-6">
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold hover:bg-[#1a6bbf] hover:text-white">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
