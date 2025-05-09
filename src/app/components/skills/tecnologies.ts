import { rootImages } from "@/app/core/rootImages"

interface Technology {
    icon: string
    name: string
}

type Technologies = Technology[];

const images = rootImages.technologies

export const technologies: Technologies = [
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