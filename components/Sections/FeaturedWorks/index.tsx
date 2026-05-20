'use client'

import { memo, useState } from 'react'
import {
  Text,
  Link,
  Box,
  Icon,
  SimpleGrid,
  HStack,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { FiExternalLink, FiGithub, FiArrowRight, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './styles.module.css'
import { projects } from 'config/projects'

const MotionBox = motion(Box)

interface SelectedProject {
  project: typeof projects[0]
  index: number
}

const ProjectCard = ({ 
  project, 
  index, 
  onPreview 
}: { 
  project: typeof projects[0], 
  index: number,
  onPreview: (project: typeof projects[0], index: number) => void
}) => {
  return (
    <MotionBox
      className={styles.projectCard}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Box className={styles.cardInner}>
        <Box 
          className={styles.cardImage}
          style={{
            backgroundImage: project.images[0].startsWith('linear-gradient')
              ? project.images[0]
              : `url(${project.images[0]})`,
          }}
          onClick={() => onPreview(project, 0)}
        >
          <Box className={styles.imageOverlay} />
          <Box className={styles.imageGlow} />
          
          {project.images.length > 1 && (
            <Box className={styles.imageCount}>
              <Icon as={FiImage} boxSize={4} />
              <span>{project.images.length} images</span>
            </Box>
          )}
          
          <Box className={styles.viewAll}>
            <span>View All</span>
          </Box>
        </Box>

        <Box className={styles.cardContent}>
          <Box className={styles.cardHeader}>
            <HStack spacing={2} flexWrap="wrap" className={styles.tags}>
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} className={styles.tagBadge}>{tag}</Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge className={styles.tagBadge}>+{project.tags.length - 3}</Badge>
              )}
            </HStack>
          </Box>

          <Text className={styles.cardTitle}>{project.title}</Text>
          <Text className={styles.cardDesc}>{project.description}</Text>

          <HStack className={styles.cardLinks}>
            {project.url && (
              <Link href={project.url} isExternal className={styles.linkButton}>
                <Icon color={'#000'} as={FiExternalLink} boxSize={4} />
                <span style={{ color: '#000' }}>Live Demo</span>
              </Link>
            )}
            {project.github && (
              <Link href={project.github} isExternal className={styles.linkButtonSecondary}>
                <Icon as={FiGithub} boxSize={4} />
                <span>Source</span>
              </Link>
            )}
          </HStack>
        </Box>
      </Box>
    </MotionBox>
  )
}

const ImageLightbox = ({ 
  project, 
  initialIndex, 
  onClose 
}: { 
  project: typeof projects[0], 
  initialIndex: number,
  onClose: () => void
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const totalImages = project.images.length

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  return (
    <Modal isOpen={true} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.9)" backdropFilter="blur(10px)" />
      <ModalContent bg="transparent" boxShadow="none" maxW="90vw">
        <ModalCloseButton 
          color="#fff" 
          size="lg" 
          top={4}
          right={4}
          zIndex={10}
          bg="rgba(255,255,255,0.1)"
          borderRadius="full"
          _hover={{ bg: "rgba(255,255,255,0.2)" }}
        />
        <ModalBody p={0} display="flex" flexDirection="column" alignItems="center">
          <Box className={styles.lightboxContainer}>
            <AnimatePresence>
              <MotionBox
                key={currentIndex}
                className={styles.lightboxImageWrapper}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  className={styles.lightboxImage}
                  style={{
                    backgroundImage: project.images[currentIndex].startsWith('linear-gradient')
                      ? project.images[currentIndex]
                      : `url(${project.images[currentIndex]})`,
                  }}
                />
              </MotionBox>
            </AnimatePresence>

            {totalImages > 1 && (
              <>
                <button className={styles.lightboxNavPrev} onClick={goToPrev}>
                  <Icon as={FiChevronLeft} boxSize={6} />
                </button>
                <button className={styles.lightboxNavNext} onClick={goToNext}>
                  <Icon as={FiChevronRight} boxSize={6} />
                </button>
              </>
            )}
          </Box>

          <Box className={styles.lightboxInfo}>
            <Text className={styles.lightboxTitle}>{project.title}</Text>
            
            <Box className={styles.lightboxThumbnails}>
              {project.images.map((img, idx) => (
                <Box
                  key={idx}
                  className={`${styles.lightboxThumb} ${idx === currentIndex ? styles.lightboxThumbActive : ''}`}
                  style={{
                    backgroundImage: img.startsWith('linear-gradient')
                      ? img
                      : `url(${img})`,
                  }}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </Box>

            <Text className={styles.lightboxCounter}>
              {currentIndex + 1} / {totalImages}
            </Text>

            <HStack className={styles.lightboxLinks}>
              {project.url && (
                <Link href={project.url} isExternal className={styles.linkButton}>
                  <Icon color={'#000'} as={FiExternalLink} boxSize={4} />
                  <span style={{ color: '#000' }}>Live Demo</span>
                </Link>
              )}
              {project.github && (
                <Link href={project.github} isExternal className={styles.linkButtonSecondary}>
                  <Icon as={FiGithub} boxSize={4} />
                  <span>Source</span>
                </Link>
              )}
            </HStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const FeaturedWorks = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null)

  const handlePreview = (project: typeof projects[0], index: number) => {
    setSelectedProject({ project, index })
  }

  const handleClose = () => {
    setSelectedProject(null)
  }

  return (
    <Box className={styles.section}>
      <Box className={styles.bg}>
        <Box className={styles.glow1} />
        <Box className={styles.glow2} />
        <Box className={styles.glow3} />
        <Box className={styles.bgPattern} />
      </Box>

      <Box ref={ref} className={styles.container}>
        <MotionBox 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Box className={styles.badge}>Portfolio</Box>
          <Text className={styles.title}>Featured Projects</Text>
          <Text className={styles.subtitle}>
            A curated selection of projects I've worked on, ranging from web applications 
            to mobile apps and smart TV platforms.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={6} className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              onPreview={handlePreview}
            />
          ))}
        </SimpleGrid>
      </Box>

      <AnimatePresence>
        {selectedProject && (
          <ImageLightbox 
            project={selectedProject.project}
            initialIndex={selectedProject.index}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </Box>
  )
}

export default memo(FeaturedWorks)