import { Link } from '@chakra-ui/react'

export type Company = 'JTU' | 'TSG' | 'Aptavis'

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
  JTU: {
    name: 'CV. Jadi Teknologi Utama',
    longName: '',
    subDetail: '',
    url: 'https://www.jaditeknologiutama.com/',
    position: 'Full Stack Web Developer',
    duration: 'Apr 2025 - Present',
    logo: {
      light: '/worked_at_logos/JTU_logo.png',
      dark: '/worked_at_logos/JTU_logo.png',
    },
    roles: [
      <>
       Developed Ixitask Management System Indohose
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
       Rebuild Loan Management System Bank BJB
      </>,
      <>
       Build Sistem Informasi Satuan Polisi Pamong Praja DKI Jakarta
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
        Create and design web-based applications (Icecreamstore, Ticketing, Kiosk, VOIP/Aptacare, etc.)
      </>,
      <>
        Create and develop applications for Tizen OS and Web OS (Aptavis & Aptacom)
      </>,
      <>
        Manage applications that are already running on the client
      </>,
      <>
        Create and use APIs for system integration
      </>,
      <>
        Update engine production to client server
      </>,
      <>
        Merge source code project team
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.JTU,
  Experiences.TSG,
  Experiences.Aptavis,
]
