'use client'

import { memo } from 'react'
import {
  Text,
  Link,
  Box,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'
import { FiMail } from 'react-icons/fi'
import styles from './styles.module.css'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/adimurianto', icon: RiGithubFill },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adi-murianto-865a621a0/', icon: RiCopyleftLine },
  { label: 'Email', href: 'mailto:adimurianto.dev@gmail.com', icon: FiMail },
]

const GetInTouch = () => {
  const [ref, inView] = useInView()

  return (
    <Box className={styles.contactSection}>
      <Box className={styles.contactBg}>
        <Box className={`${styles.contactGlow} ${styles.contactGlow1}`} />
        <Box className={`${styles.contactGlow} ${styles.contactGlow2}`} />
        <Box className={styles.contactGrid} />
      </Box>

      <Box className={styles.contactContainer}>
        <Box textAlign="center" mb={6}>
          <span className={styles.sectionBadge}>Contact</span>
          <h2 className={styles.sectionTitle}>
            Say Hi!{' '}
            <motion.span
              className={styles.emoji}
              variants={rimuruVariant}
              ref={ref}
              animate={inView ? ['shake', 'jump'] : false}
            >
              (⁀ᗢ⁀)
            </motion.span>
          </h2>
        </Box>

        <Text className={styles.contactDesc}>
          Though I'm fairly introverted, I do reply to messages as long
          as my human interaction battery lasts. Coding, work, sports — anything is cool.
        </Text>

        <Box className={styles.contactCard}>
          {/* Contact buttons in a 2-column grid */}
          <Box className={styles.contactLinks}>
            <Box
              as="a"
              href="mailto:adimurianto.dev@gmail.com"
              className={styles.contactBtn}
              target="_blank"
              rel="noreferrer"
            >
              <Box className={styles.contactBtnIcon}>
                <FiMail size={20} />
              </Box>
              <Box>
                <Text className={styles.contactBtnLabel}>Email</Text>
                <Text className={styles.contactBtnValue}>adimurianto.dev@gmail.com</Text>
              </Box>
            </Box>
            <Box
              as="a"
              href="https://github.com/adimurianto"
              className={styles.contactBtn}
              target="_blank"
              rel="noreferrer"
            >
              <Box className={styles.contactBtnIcon}>
                <RiGithubFill size={20} />
              </Box>
              <Box>
                <Text className={styles.contactBtnLabel}>GitHub</Text>
                <Text className={styles.contactBtnValue}>@adimurianto</Text>
              </Box>
            </Box>
            <Box
              as="a"
              href="https://www.linkedin.com/in/adi-murianto-865a621a0/"
              className={styles.contactBtn}
              target="_blank"
              rel="noreferrer"
            >
              <Box className={styles.contactBtnIcon}>
                <RiCopyleftLine size={20} />
              </Box>
              <Box>
                <Text className={styles.contactBtnLabel}>LinkedIn</Text>
                <Text className={styles.contactBtnValue}>Connect with me</Text>
              </Box>
            </Box>
            <Box
              as="a"
              href="/CV_Adi_Murianto.pdf"
              className={styles.contactBtn}
              target="_blank"
              rel="noreferrer"
            >
              <Box className={styles.contactBtnIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </Box>
              <Box>
                <Text className={styles.contactBtnLabel}>CV</Text>
                <Text className={styles.contactBtnValue}>Download Resume</Text>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box className={styles.footer}>
          <Link
            href="https://github.com/adimurianto"
            target="_blank"
            rel="noreferrer"
            className={styles.footerLink}
          >
            <Icon as={RiGithubFill} h={5} w={5} />
            <Text as="span">
              Designed and Made with <Icon as={RiHeartPulseFill} className={styles.heartIcon} /> by{' '}
              AM Codes <Icon as={RiCopyleftLine} /> {new Date().getFullYear()}
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(GetInTouch)