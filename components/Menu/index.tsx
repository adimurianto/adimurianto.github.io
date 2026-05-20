'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Flex,
  Link,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '../Logo'
import styles from './styles.module.css'

const navItems = [
  { label: 'About', href: '#aboutMe' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#jobs' },
  { label: 'Contact', href: '#contact' },
]

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScroll = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      if (current > 100 && current > lastScroll.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScroll.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Box
        as="header"
        className={`${styles.header} ${hidden ? styles.headerHidden : ''}`}
      >
        <Container maxW="container.xl" className={styles.container}>
          <Flex align="center" justify="space-between" width="100%">
            <Logo />

            <Box display="flex" alignItems="center" gap={{ base: 2, md: 4 }}>
              <Box className={styles.navLinks}>
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className={styles.navItem}>
                    {item.label}
                  </Link>
                ))}
              </Box>

              <Box className={styles.actions}>
                <button
                  className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                >
                  <span />
                  <span />
                  <span />
                </button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.nav
              className={styles.mobileNav}
              variants={stagger}
              initial="initial"
              animate="animate"
            >
              {navItems.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <Link
                    href={item.href}
                    className={styles.mobileNavItem}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu