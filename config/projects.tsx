export type Project = {
  title: string
  description: string
  tags: string[]
  images: string[]
  url?: string
  github?: string
}

const gradients = [
  'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
  'linear-gradient(135deg, #0d0d0d, #1a1a2e, #16213e)',
  'linear-gradient(135deg, #0b0b1a, #1b1b3a, #2d1b69)',
  'linear-gradient(135deg, #0a0a0f, #1a1a3e, #0a2a4a)',
  'linear-gradient(135deg, #0f0f1a, #1a1a30, #2a1040)',
  'linear-gradient(135deg, #0a1628, #1a1a3e, #0f3460)',
  'linear-gradient(135deg, #100a1a, #2a1040, #1a1a30)',
  'linear-gradient(135deg, #0a0f1a, #0a2a4a, #1a1a3e)',
]

const getGradients = (start: number, count: number) =>
  Array.from({ length: count }, (_, i) => gradients[(start + i) % gradients.length])

export const projects: Project[] = [
  {
    title: 'System Information Satpol PP DKI Jakarta (SISAPPRA)',
    description:
      'A web-based information system for Satpol PP DKI Jakarta. Contributed to the personnel module, including employee data management, reporting, finance, and master data modules with responsive design. Responsible for developing the backend services, database design and management, as well as implementing system functionalities to support efficient data processing and reporting.',
    tags: ['Go', 'Gin', 'GORM', 'PostgreSQL', 'MongoDB', 'Redis', 'Next.js', 'Redux'],
    images: [
      '/projects/sisappra/1-satpol.jpeg',
      '/projects/sisappra/2-satpol.jpeg',
      '/projects/sisappra/3-satpol.jpeg',
      '/projects/sisappra/4-satpol.jpeg',
    ],
    url: 'https://sisappra-satpolpp.jakarta.go.id/',
  },
  {
    title: 'LMS Bank BJB',
    description:
      'Rebuilt Loan Management System for Bank BJB into a scalable Next.js application with component-based architecture using Mantine UI, improving maintainability, UI/UX, and data handling efficiency.',
    tags: ['Next.js', 'Mantine UI', 'Redux', 'React Query'],
    images: [
      '/projects/bjb/lms-bjb-umkm-1.png',
      '/projects/bjb/lms-bjb-umkm-2.png',
      '/projects/bjb/lms-bjb-umkm-3.png',
      '/projects/bjb/lms-bjb-umkm-4.png',
      '/projects/bjb/lms-bjb-umkm-5.png',
      '/projects/bjb/lms-bjb-umkm-6.png',
    ],
  },
  {
    title: 'Ixitask Management System',
    description:
      'Web-based task management application for Indohose to streamline internal business processes. Built with CodeIgniter 3 and MySQL with interactive Bootstrap and jQuery interfaces.',
    tags: ['CodeIgniter 3', 'MySQL', 'Bootstrap', 'jQuery'],
    images: [
      '/projects/ixitask/ixitask-1.png',
      '/projects/ixitask/ixitask-2.png',
      '/projects/ixitask/ixitask-3.png',
      '/projects/ixitask/ixitask-4.png',
    ],
    url: 'https://bgr-eng.ixitask.com/',
  },
  {
    title: 'Mobile App - E-K2PC',
    description:
      'This mobile application is used to document and track the provision of assistance to pregnant women and babies. This application is one of my freelance projects using Flutter. API integration in this application is used to SignIn, retrieve and send data to the center.',
    tags: ['Flutter', 'Dart', 'SQLite'],
    images: ['/projects/ek2pc/ek2pc-1.png'],
  },
  {
    title: 'Campina Ice Cream Store',
    description:
      'Developed a full-featured E-Commerce System using PHP CodeIgniter 3, jQuery, Bootstrap and MySQL. Built with secure payment workflows, responsive interfaces, and a modular architecture, the system supports online transactions to ensure stable performance, scalability, and an improved customer shopping experience.',
    tags: ['PHP', 'CodeIgniter 3', 'MySQL', 'jQuery', 'Bootstrap'],
    images: [
      '/projects/campina/campina-1.png',
      '/projects/campina/campina-2.png',
      '/projects/campina/campina-3.png',
      '/projects/campina/campina-4.png',
    ],
    url: 'https://icecreamstore.co.id/',
  },
  {
    title: 'Aptavis System',
    description:
      'Applications for hotels / hospitals that are used by hotel guests / hospital patients for entertainment and information, including watching TV Streaming, VOD, Music, Order Resto, Information about places around the hotel / hospital, etc.',
    tags: ['Tizen OS', 'WebOS', 'REST API', 'WebSocket', 'GraphQL'],
    images: [
      '/projects/aptavis/aptavis-1.png',
      '/projects/aptavis/aptavis-2.png',
      '/projects/aptavis/aptavis-3.png',
      '/projects/aptavis/aptavis-4.png',
    ],
    url: 'https://aptavis.net/',
  },
]
