import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  bootstrap,
  mysql,
  php,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  campina,
  pokedex,
  news,
  aguninterior,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'php',
    icon: php,
  },
  {
    name: 'bootstrap',
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: 'Internship',
    company_name: 'Codepolitan',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2017 - Apr 2017',
  },
  {
    title: 'Freelance Web Developer',
    company_name: 'Freelance',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2018 - Nov 2018',
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'PT. Digital Apta Media',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2018 - Feb 2023',
  },
  {
    title: 'Front-End Developer',
    company_name: 'PT. Tristar Surya Gemilang',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Mar 2023 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Ice Cream Store',
    description: 'Website eCommerce Ice Cream Campina',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: campina,
    repo: 'https://github.com/adimurianto',
    demo: 'https://icecreamstore.co.id',
  },
  {
    id: 'project-2',
    name: 'Pokedex',
    description:
      "All the Pokémon data you'll ever need in one place",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: pokedex,
    repo: 'https://github.com/adimurianto/pokedex',
    demo: 'https://pokedex-adimurianto.vercel.app',
  },
  {
    id: 'project-3',
    name: 'News',
    description: 'Website hot news, cloning data on CNN',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: news,
    repo: 'https://github.com/adimurianto/news',
    demo: 'https://news-adimurianto.vercel.app',
  },
  {
    id: 'project-4',
    name: 'Agun Interior',
    description: 'Website company profile agun interior',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: aguninterior,
    repo: 'https://github.com/adimurianto/aguninterior-company',
    demo: 'https://aguninterior-company-adimurianto.vercel.app',
  },
];

export { services, technologies, experiences, projects };
