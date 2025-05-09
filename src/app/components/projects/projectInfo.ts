import { rootImages } from "@/app/core/rootImages"


interface Project {
    image: string
    title: string
    description: string
    technologies: string[]
    link: string
}

const images = rootImages.projects

export const projectInfo: Project[] = [
    {
    image: images.lvlm,
    title: 'Lvlm',
    description: 'LVLM is a web3 platform enabling users to create & manage tokens & NFTs with secure smart contracts & seamless integration for a user-friendly experience.',
    technologies: ['React', 'Next.js', 'Chakra.UI', 'Node.js', 'Express', 'MongoDB'],    
    link: 'https://lvlx.vip/',
    },
    {
        image: images.nfanst,
        title: 'NFansT',
        description: 'NFansT is an exclusive NFT-based membership club where holders gain VIP access to unique perks, private content, and governance rights within a limited Web3 community.',
        technologies: ['React', 'Next.js', 'Material UI', 'Node.js', 'Express','Python', 'Flask',  'MongoDB', ],    
        link: 'https://nfanst.devtop.online/',
    },
    {
        image: images.dgalery,
        title: 'DGalery',
        description: 'Dgalery is an AI-powered platform that transforms digital art creation, allowing users to generate and explore unique artworks effortlessly through an intuitive, interactive experience.',
        technologies: ['Angular','React', 'Next.js', 'Angular',  'Material UI', 'Node.js', 'Express','Python', 'Flask','MongoDB'],    
        link: 'https://dgalery.com/',
    },
    {
        image: images.nasa,
        title: 'Nasa',
        description: 'NASA is a group that promotes fun and curiosity, bringing joy to Latin America. Also sells toys online.',
        technologies: ['Vue.js', 'PrimeVue', 'PrimeFlex', 'Node.js', 'Express', 'Supabase','MySQL', 'Netsuite'],    
        link: 'https://nasa.com.pa/',
    },
    {
        image: images.carry,
        title: 'Carry Consulting',
        description: 'RRY Consulting guides first-time gun owners with expert firearm selection, safety training, gear advice & ongoing support for confident, responsible ownership.',
        technologies: ['Vue.js', 'PrimeVue', 'PrimeFlex', 'Graphql', 'Express', 'Shopify'],    
        link: 'https://carryconsulting.info/',
    },
]