import { memo, useState } from 'react'
import { useColorMode, Image, useBreakpointValue } from '@chakra-ui/react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'
import { ThemeMode, mobileBreakpointsMap } from 'config/theme'
import { simpleOpacity } from 'config/animations'

const Logo = () => {
  const { colorMode } = useColorMode()
  const [isLogoLoaded, setLogoLoaded] = useState(false)
  const MotionImage = motion(Image)
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
    <AnimatePresence>
      <Link href="/" passHref>
        {colorMode === ThemeMode.Dark ? (
          <MotionImage
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '40px' : '80px'}
            objectFit="cover"
            src="./logo.png"
            alt="AM Codes Logo"
            fallbackSrc="./logo.png"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        ) : (
          <MotionImage
            className={!isMobile ? styles.logo : ''}
            boxSize={isMobile ? '40px' : '80px'}
            objectFit="cover"
            src="./logo.png"
            fallbackSrc="./logo.png"
            alt="AM Codes Logo"
            variants={simpleOpacity}
            initial="initial"
            animate={isLogoLoaded && 'animate'}
            onLoad={() => setLogoLoaded(true)}
            zIndex={2}
          />
        )}
      </Link>
    </AnimatePresence>
  )
}

export default memo(Logo)