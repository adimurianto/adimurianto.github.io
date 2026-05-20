'use client'

import { useRef, useEffect, useState } from 'react'
import { Box, Container, Heading, Text, Stack, Button, Link, Icon, HStack, Flex, Image, keyframes } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDev } from 'react-icons/fa'
import styles from './styles.module.css'

// Logo-based color palette
export const COLORS = {
  primary: '#23f9fe',      // Cyan - main logo color
  secondary: '#00d4ff',  // Electric blue
  accent: '#7B2FFF',      // Purple accent
  dark: '#0a0a0f',        // Dark background
  light: '#ffffff',       // Light text
  muted: '#8a8a9a',       // Muted text
}

// Animated gradient background
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

// Floating particles animation
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`

// Pulse glow animation
const glowAnimation = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(35, 249, 254, 0.3); }
  50% { box-shadow: 0 0 40px rgba(35, 249, 254, 0.6); }
`

const socialLinks = [
  { icon: FaTwitter, href: 'https://x.com/MuriantoAdi', label: 'Twitter' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/adi-murianto-865a621a0/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/adimurianto', label: 'GitHub' },
  { icon: FaDev, href: 'https://dev.to/adimurianto', label: 'Dev.to' },
]

const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[textIndex]

    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setCharIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setTextIndex(prev => (prev + 1) % texts.length)
        setCharIndex(0)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, textIndex, texts])

  const displayText = texts[textIndex]?.slice(0, charIndex) || ''

  return (
    <span>
      {displayText}
      <Box as="span" className={styles.cursor}>|</Box>
    </span>
  )
}

const FloatingParticle = ({ delay, size, x, y }: { delay: number, size: number, x: string, y: string }) => (
  <Box
    position="absolute"
    width={`${size}px`}
    height={`${size}px`}
    borderRadius="full"
    bg={COLORS.primary}
    opacity={0.1}
    left={x}
    top={y}
    filter="blur(2px)"
    animation={`${floatAnimation} ${3 + delay}s ease-in-out infinite`}
    animationDelay={`${delay}s`}
  />
)

const GlowOrb = ({ size, x, y }: { size: string, x: string, y: string }) => (
  <Box
    position="absolute"
    width={size}
    height={size}
    borderRadius="full"
    bg={`linear-gradient(135deg, ${COLORS.primary}20, ${COLORS.accent}20)`}
    left={x}
    top={y}
    filter="blur(60px)"
    animation={`${glowAnimation} 4s ease-in-out infinite`}
  />
)

const Hero = () => {
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2018

  const containerRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const floatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!avatarRef.current || !floatRef.current) return

    // Mouse tilt parallax
    const el = avatarRef.current
    let frame: number
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = (e.clientX - cx) / rect.width
        const dy = (e.clientY - cy) / rect.height
        floatRef.current!.style.transform = `translateY(${dy * 12}px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(frame)
      floatRef.current!.style.transform = 'translateY(0px) rotateX(0deg) rotateY(0deg)'
    }
    el.addEventListener('mousemove', onMove, { passive: true })
    el.addEventListener('mouseleave', onLeave, { passive: true })

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <Box
      as="section"
      minH="100vh"
      position="relative"
      overflow="hidden"
      bg="linear-gradient(180deg, #0a0a0f 0%, #121218 100%)"
    >
      {/* Background Effects */}
      <Box className={styles.backgroundEffects}>
        <GlowOrb size="400px" x="10%" y="20%" />
        <GlowOrb size="300px" x="70%" y="60%" />
        <FloatingParticle delay={0} size={6} x="15%" y="30%" />
        <FloatingParticle delay={1} size={4} x="25%" y="50%" />
        <FloatingParticle delay={2} size={8} x="80%" y="25%" />
        <FloatingParticle delay={0.5} size={5} x="60%" y="70%" />
        <FloatingParticle delay={1.5} size={3} x="85%" y="45%" />
        <FloatingParticle delay={2.5} size={7} x="45%" y="80%" />
      </Box>

      {/* Animated Grid Lines */}
      <Box className={styles.gridLines}>
        {[...Array(5)].map((_, i) => (
          <Box key={i} className={styles.gridLine} style={{ left: `${20 * (i + 1)}%` }} />
        ))}
      </Box>

      <Container maxW="container.xl" minH="100vh" position="relative" zIndex={1}>
        <Stack
          ref={containerRef}
          className={styles.heroContent}
          spacing={8}
          justify="center"
          minH="100vh"
          py={{ base: 20, lg: 0 }}
        >
          {/* Main Content + Avatar */}
          <Flex className={styles.heroInner} align="center" gap={{ base: 8, lg: 16 }}>
            {/* Main Content */}
            <Box className={styles.textContainer}>
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Text
                  className={styles.greeting}
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={COLORS.muted}
                  mb={4}
                >
                  Hello, I'm
                </Text>
              </motion.div>

              {/* Name with Split Text Animation */}
              <Heading
                as="h1"
                size="2xl"
                className={styles.name}
                fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
                fontWeight="bold"
                lineHeight="1.1"
                mb={4}
              >
                <motion.span
                  className={styles.nameFirst}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  Adi
                </motion.span>
                <br />
                <motion.span
                  className={styles.nameLast}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Murianto
                </motion.span>
              </Heading>

              {/* Animated Role Title */}
              <Box className={styles.roleContainer} mb={6}>
                <Box className={styles.roleTag}>
                  <Box className={styles.roleDot} />
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={COLORS.primary}
                    fontWeight="medium"
                  >
                    <TypingEffect
                      texts={['Full Stack Developer', 'Backend Specialist', 'API Architect', 'Problem Solver']}
                    />
                  </Text>
                </Box>
              </Box>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Text
                  className={styles.bio}
                  fontSize={{ base: 'md', md: 'lg' }}
                  color={COLORS.muted}
                  maxW="600px"
                  lineHeight="1.8"
                >
                  I'm a full stack developer specializing in backend APIs,
                  database optimization, and seamless front-end integration.
                  <br />
                  <Text as="span" color={COLORS.primary}>{professionalYears} years</Text> of crafting digital solutions.
                </Text>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className={styles.ctaContainer}
              >
                <HStack spacing={4} flexWrap="wrap" gap={4}>
                  <motion.button
                    className={styles.ctaPrimary}
                    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${COLORS.primary}50` }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="mailto:adimurianto.dev@gmail.com"
                      color={COLORS.dark}
                      fontWeight="bold"
                      textDecoration="none"
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      Get in touch
                      <Box className={styles.ctaArrow}>→</Box>
                    </Link>
                  </motion.button>

                  <motion.button
                    className={styles.ctaSecondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href="/CV_Adi_Murianto.pdf"
                      target="_blank"
                      color={COLORS.primary}
                      fontWeight="bold"
                      textDecoration="none"
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      View CV
                      <Box className={styles.ctaArrow}>↓</Box>
                    </Link>
                  </motion.button>
                </HStack>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className={styles.statsContainer}
              >
                <HStack spacing={{ base: 4, md: 16 }} className={styles.stats}>
                  <Box className={styles.statItem}>
                    <Text className={styles.statNumber}>{professionalYears}</Text>
                    <Text className={styles.statLabel}>Years Experience</Text>
                  </Box>
                  <Box className={styles.statDivider} />
                  <Box className={styles.statItem}>
                    <Text className={styles.statNumber}>15+</Text>
                    <Text className={styles.statLabel}>Projects Delivered</Text>
                  </Box>
                </HStack>
              </motion.div>
            </Box>

            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={styles.avatarWrapper}
              ref={avatarRef}
            >
              <Box ref={floatRef} position="relative">
                <Box className={styles.avatarFrame}>
                  <Box className={styles.avatarGlow} />
                  <Image
                    src="./AMC_avatar.png"
                    alt="Adi Murianto"
                    className={styles.avatarImg}
                    objectFit="cover"
                  />
                </Box>
                <Box className={styles.avatarBeam} />
                <Box className={styles.avatarShadow} />
              </Box>
            </motion.div>
          </Flex>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className={styles.socialContainer}
          >
            <HStack spacing={6} className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    <Icon as={social.icon} boxSize={5} />
                  </Link>
                </motion.div>
              ))}
            </HStack>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className={styles.scrollIndicator}
          >
            <Box className={styles.scrollLine}>
              <Box className={styles.scrollDot} />
            </Box>
            <Text fontSize="xs" color={COLORS.muted} textTransform="uppercase" letterSpacing="wider">
              Scroll to explore
            </Text>
          </motion.div>
        </Stack>
      </Container>

      {/* Decorative Elements */}
      <Box className={styles.decorativeCircle} />
      <Box className={styles.decorativeLine1} />
      <Box className={styles.decorativeLine2} />
    </Box>
  )
}

export default Hero