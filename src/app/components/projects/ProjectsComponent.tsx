'use client'
import React from 'react'
import { projectInfo } from './projectInfo'
import Image from 'next/image'

export const ProjectsComponent = () => {

    const projects = projectInfo

  return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-center text-4xl font-semibold tracking-tight text-pretty text-bluetext font-poppins sm:text-5xl lg:text-balance">
             Projects
            </p>
            <p className="mt-8 text-lg/8 font-poppins text-center">
            These are some of the projects I&apos;ve built and contributed to, each representing unique challenges 
        and innovative solutions. From concept to deployment, each project reflects my dedication to 
        creating impactful digital experiences.
            </p>
          </div>
            <div className='flex flex-col mt-16 lg:p-5 gap-10' >
                {projects.map((project, index) => (
                    <div key={index} className='flex flex-col lg:flex-row-reverse gap-3 p-3 bg-sky-950 rounded-lg shadow-lg'>
                        <Image 
                          onClick={() => window.open(project.link, '_blank')}
                          src={project.image} 
                          alt={project.title} 
                          width={400} 
                          height={400} 
                          className='w-full h-auto lg:w-1/2 lg:h-auto rounded-xl transform transition-transform duration-300 hover:scale-90 cursor-pointer' 
                        />
                        <div className='flex flex-col lg:w-1/2 lg:ml-4 p-3'>
                            <h2 className='lg:text-5xl text-xl text-center lg:text-left font-bold  uppercase'>{project.title}</h2>
                            <p className='text-lg text-center lg:text-left text-gray-300 mt-2'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mt-4'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='bg-gray-700 text-white px-2 py-1 rounded-md'>{tech}</span>
                                ))}
                            </div>
                            <div className='flex justify-center items-center mt-4'>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className='mt-4 rounded-md bg-bluetext px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#1a6bbf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"'>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
            
            </div>
            </div>
        </div>
  )
}
