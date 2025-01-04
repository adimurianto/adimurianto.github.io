import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  Container,
  Link,
  Box,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
  scaleUp,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'
import Avatar from 'components/Avatar'
const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <motion.div
        id="sidebarCircle"
        className={`${styles.sidebar} ${
          colorMode === 'light' ? styles.dark : ''
        }`}
        variants={scaleUp}
        style={{ display: display }}
        animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
      ></motion.div>
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionStack alignItems={{ base: 'center', md: 'flex-start' }}>
            <Avatar />
            <MotionHeading
              as="h1"
              size="2xl"
              paddingRight={{ lg: '20' }}
              textTransform="uppercase"
              variants={scaleUp}
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 1.1 }}
            >
              Adi Murianto
            </MotionHeading>

            <MotionHeading
              as="h3"
              size="md"
              variant="emphasis"
              className={styles.marginTopSmall}
              variants={simpleOpacity}
              textAlign={{ base: 'center', md: 'left' }}
            >
              Full Stack Developer
            </MotionHeading>
          </MotionStack>

          <MotionText
            variant="description"
            fontSize="small"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            Hey! How nice of you to look at my personal site,
            <Text variant="emphasis" as="span">
              {' '}
              Thank you!
            </Text>
            <br />I am full stack developer that specializes at backend apis, front
            end integration.
          </MotionText>
          
          <MotionStack direction="row" spacing={4}>
            <MotionButton
              size="lg"
              variant="outline"
              borderWidth="1px"
              borderRadius="0"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              variants={letterSpace}
              as={'a'}
              href="mailto:murianto013@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get in touch!
            </MotionButton>
            <MotionButton
              size="lg"
              variant="outline"
              borderWidth="1px"
              borderRadius="0"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              variants={letterSpace}
              as={'a'}
              href="/CV_Adi_Murianto.pdf"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              CV & Portfolio
            </MotionButton>
          </MotionStack>

          <MotionBox d="flex" variants={simpleOpacity} >
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar
