import Image from 'next/image'
import React from 'react'
import { technologies } from './tecnologies'


export const SkillsSection = () => {
    const techno = technologies

    return (
    <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
      <p className="mt-2 text-center text-4xl font-semibold tracking-tight text-pretty text-bluetext font-poppins sm:text-5xl lg:text-balance">
         Skills and Technologies
        </p>
        <p className="mt-8 text-lg/8 font-poppins text-center">
        Over the years, I have worked with a variety of technologies. Here are some of them I have experience with:
        </p>
      </div>
      <div className='mx-auto mt-11 flex max-w-3xl flex-wrap justify-center gap-2'>
      {techno.map((tech: { icon: string; name: string; }) => (
        <div key={tech.name} className="flex p-3 w-auto my-auto justify-center border-2 border-bluetext gap-2
rounded-md mt-4 hover:bg-bluetext hover:text-white transition duration-300 ease-in-out">
        <Image src={tech.icon} alt={tech.name} width={17} height={0} />
        <p>
            {tech.name}
        </p>
        </div>
      ))}
      </div>
      
        </div>
    </div>

  )
}
