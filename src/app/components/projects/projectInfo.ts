import { rootImages } from "@/app/core/rootImages"

interface Project {
    image: string
    title: string
    description: string
    descriptionEs: string
    technologies: string[]
    link: string
}

const images = rootImages.projects

export const projectInfo: Project[] = [
    {
        image: images.lvlm,
        title: 'Lvlm',
        description: 'LVLM is a web3 platform enabling users to create & manage tokens & NFTs with secure smart contracts & seamless integration for a user-friendly experience.',
        descriptionEs: 'LVLM es una plataforma web3 que permite a los usuarios crear y gestionar tokens y NFTs con contratos inteligentes seguros e integración perfecta para una experiencia amigable.',
        technologies: ['React', 'Next.js', 'Chakra.UI', 'Node.js', 'Express', 'MongoDB'],
        link: 'https://lvlx.vip/',
    },
    {
        image: images.paradise,
        title: 'Paradise Lovers',
        description: 'Paradise Lovers is a kawaii creative accessories and stationery store offering a charming selection of cute products, gifts, and artistic supplies for lovers of everything adorable.',
        descriptionEs: 'Paradise Lovers es una tienda de accesorios y papelería creativa kawaii que ofrece una encantadora selección de productos tiernos, regalos y suministros artísticos para los amantes de todo lo adorable.',
        technologies: ['Next.js', 'Node.js', 'Supabase', 'PostgreSQL'],
        link: 'https://www.paradiselovers.com.ve/',
    },
    {
        image: images.dgalery,
        title: 'DGalery',
        description: 'Dgalery is an AI-powered platform that transforms digital art creation, allowing users to generate and explore unique artworks effortlessly through an intuitive, interactive experience.',
        descriptionEs: 'Dgalery es una plataforma impulsada por IA que transforma la creación de arte digital, permitiendo a los usuarios generar y explorar obras únicas de forma intuitiva e interactiva.',
        technologies: ['Angular', 'React', 'Next.js', 'Material UI', 'Node.js', 'Express', 'Python', 'Flask', 'MongoDB'],
        link: 'https://dgalery.com/',
    },
    {
        image: images.nasa,
        title: 'Nasa',
        description: 'NASA is a group that promotes fun and curiosity, bringing joy to Latin America. Also sells toys online.',
        descriptionEs: 'NASA es un grupo que promueve la diversión y la curiosidad, llevando alegría a Latinoamérica. También vende juguetes en línea.',
        technologies: ['Vue.js', 'PrimeVue', 'PrimeFlex', 'Node.js', 'Express', 'Supabase', 'MySQL', 'Netsuite'],
        link: 'https://nasa.com.pa/',
    },
]