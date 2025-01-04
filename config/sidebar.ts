import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://x.com/MuriantoAdi',
    icon: FaTwitter,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adi-murianto-865a621a0/',
    icon: FaLinkedin,
  },
  {
    label: 'Github',
    href: 'https://github.com/adimurianto',
    icon: FaGithub,
  },
  {
    label: 'Dev.to',
    href: 'https://dev.to/adimurianto',
    icon: FaDev,
  },
]
