import { Link } from '@chakra-ui/react'

export type Company = 'JTU' | 'TSG' | 'Freelance' | 'Aptavis'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Freelance: {
    name: 'Self-employed',
    longName: '',
    subDetail: '',
    url: '',
    position: 'Freelance Full Stack Developer',
    duration: 'Mar 2018 - Present',
    logo: {
      light: '',
    },
    roles: [
      <>
        Delivered multiple web-based systems (e-point, inventory, and others) using Golang, Next.js, CodeIgniter, Laravel, jQuery, MySQL, and PostgreSQL
      </>,
      <>
        Developed E-K2PC mobile application for Puskesmas Cirinten using Flutter with SQLite for efficient local data handling
      </>,
      <>
        Built and customized company profile websites using Webflow for international clients
      </>,
      <>
        Managed end-to-end development lifecycle, ensuring scalable, reliable, and user-friendly solutions
      </>,
    ],
  },
  JTU: {
    name: 'CV. Jadi Teknologi Utama',
    longName: '',
    subDetail: '',
    url: '',
    position: 'Full Stack Web Developer',
    duration: 'Apr 2025 - Mar 2026',
    logo: {
      light: '',
    },
    roles: [
      <>
        Developed and maintained Ixitask Management System, a web-based task management application to streamline internal business processes
      </>,
      <>
        Built backend features using CodeIgniter 3 with MySQL for data management and business logic
      </>,
      <>
        Developed interactive user interfaces using Bootstrap and jQuery to enhance usability and responsiveness
      </>,
      <>
        Performed bug fixing, feature enhancements, and system optimization for better performance and stability
      </>,
    ],
  },
  TSG: {
    name: 'PT. Tristar Surya Gemilang',
    longName: '',
    subDetail: '',
    url: 'https://www.tsgitdev.com/',
    position: 'Full Stack Developer',
    duration: 'Mar 2023 - Apr 2025',
    logo: {
      light: '/worked_at_logos/TSG_logo.png',
      dark: '/worked_at_logos/TSG_logo.png',
    },
    roles: [
      <>
        Developed SISAPPRA (Sistem Informasi Satpol PP DKI Jakarta) using microservices architecture with Go (Gin, GORM), PostgreSQL, MongoDB, and Redis, improving system scalability
      </>,
      <>
        Rebuilt Loan Management System for Bank BJB into a scalable Next.js-based application with component-based design (Mantine UI)
      </>,
      <>
        Implemented secure REST APIs using JWT authentication and Swagger documentation
      </>,
      <>
        Built modern frontend applications using Next.js, Redux, and React Query to enhance user experience
      </>,
    ],
  },
  Aptavis: {
    name: 'PT. Digital Apta Media',
    longName: '',
    subDetail: '',
    url: 'https://aptavis.net/',
    position: 'Full Stack Web Developer',
    duration: 'May 2018 - Feb 2023',
    logo: {
      light: '/worked_at_logos/Aptavis_logo.png',
      dark: '/worked_at_logos/Aptavis_logo_dark.png',
    },
    roles: [
      <>
        Developed and maintained web-based applications (Icecreamstore, Ticketing, Digital Signage, VOIP) using CodeIgniter 3, MySQL, PostgreSQL, GraphQL, MongoDB, jQuery, and Bootstrap
      </>,
      <>
        Built and supported IPTV applications on Tizen OS and WebOS (Aptavis & Aptacom), maintaining stability across smart device platforms
      </>,
      <>
        Designed and integrated REST APIs, WebSocket, and Webhooks for real-time communication and seamless system integration
      </>,
      <>
        Managed production deployments and live system troubleshooting, ensuring high availability
      </>,
      <>
        Collaborated with cross-functional teams to maintain code quality and smooth release cycles
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Freelance,
  Experiences.JTU,
  Experiences.TSG,
  Experiences.Aptavis,
]
