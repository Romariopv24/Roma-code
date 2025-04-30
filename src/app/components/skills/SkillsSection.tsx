import { rootImages } from '@/app/core/rootImages'
import Image from 'next/image'
import React from 'react'


export const SkillsSection = () => {
    const images = rootImages.technologies


    const technologies = [
        {
            icon: images.html,
            name: 'HTML',
        },
        {
            icon: images.css3,
            name: 'CSS3',
        },
        {
            icon: images.javascript,
            name: 'Javascript',
        },
        {
            icon: images.typescript,
            name: 'Typescript',
        },
        {
            icon: images.react,
            name: 'React.js',
        },
        {
            icon: images.nextjs,
            name: 'Next.js',
        },
        {
            icon: images.astro,
            name: 'Astro',
        },
        {
            icon: images.vue,
            name: 'Vue',
        },
        {
            icon: images.redux,
            name: 'Redux',
        },
        {
            icon: images.tailwind,
            name: 'Tailwind CSS',
        },
        {
            icon: images.materialUI,
            name: 'Material UI',
        },
        {
            icon: images.shadcn,
            name: 'Shadcn',
        },
        {
            icon: images.node,
            name: 'Node.js',
        },
        {
            icon: images.express,
            name: 'Express',
        },
        {
            icon: images.mongo,
            name: 'MongoDB',
        },
        {
            icon: images.mysql,
            name: 'MySQL',
        },
        {
            icon: images.cSharp,
            name: 'C#',
        },
        {
            icon: images.python,
            name: 'Python',
        },
        {
            icon: images.graphql,
            name: 'GraphQL',
        },
        {
            icon: images.npm,
            name: 'NPM',
        },
        {
            icon: images.git,
            name: 'Git',
        },
        {
            icon: images.github,
            name: 'Github',
        },
        {
            icon: images.figma,
            name: 'Figma',
        },
        {
            icon: images.vercel,
            name: 'Vercel',
        },

    ]
    return (
    <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
      <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-bluetext font-poppins sm:text-5xl lg:text-balance">
         Skills and Technologies
        </p>
        <p className="mt-6 text-lg/8 font-poppins">
        Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
        </p>
      </div>
      <div className='mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-2'>
      {technologies.map((tech: { icon: string; name: string; }) => (
        <div key={tech.name} className="flex p-3 w-auto my-auto justify-center border-2 border-bluetext gap-2
rounded-md mt-4 hover:bg-bluetext hover:text-white transition duration-300 ease-in-out">
        <Image src={tech.icon} alt={tech.name} width={15} height={0} />
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
