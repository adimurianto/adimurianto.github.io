import { memo } from 'react'
import {
  Heading,
  Text,
  SimpleGrid,
  Box,
} from '@chakra-ui/react'
import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextDotJs,
  SiNodeDotJs,
  SiPhp,
  SiPostgresql,
  SiFlutter,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'
import { IoMdOpen } from 'react-icons/io'
import styles from './styles.module.css'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2018

  const techStack = [
    { icon: SiGo, name: 'Go', detail: 'Gin, Gorm' },
    { icon: SiJavascript, name: 'JavaScript', detail: 'ES6+' },
    { icon: SiTypescript, name: 'TypeScript', detail: '' },
    { icon: SiPhp, name: 'PHP', detail: 'Laravel' },
    { icon: SiPostgresql, name: 'PostgreSQL', detail: '' },
    { icon: SiMysql, name: 'MySQL', detail: '' },
    { icon: SiMongodb, name: 'MongoDB', detail: '' },
    { icon: SiReact, name: 'React', detail: '' },
    { icon: SiNextDotJs, name: 'Next.js', detail: '' },
    { icon: SiFlutter, name: 'Flutter', detail: '' },
  ]

  return (
    <Box className={styles.aboutSection}>
      <Box className={styles.aboutBackground}>
        <Box className={`${styles.aboutGlow} ${styles.aboutGlow1}`} />
        <Box className={`${styles.aboutGlow} ${styles.aboutGlow2}`} />
        <Box className={styles.aboutGrid} />
      </Box>

      <Box className={styles.aboutContainer}>
        <Box textAlign="center" mb={8}>
          <span className={styles.sectionLabel}>About Me</span><br/><br/>
          <Heading
            as="h4"
            className={styles.sectionTitle}
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            letterSpacing="0.05em"
          >
            <span>What I Do</span>
          </Heading>
        </Box>

        <Text
          className={styles.aboutDescription}
          fontSize={{ base: 'md', md: 'lg' }}
          textAlign="center"
        >
          I've been coding professionally for <strong>{professionalYears} years</strong> and
          currently working as a <strong>Full Stack Developer</strong> focusing on{' '}
          <strong>database</strong>, <strong>APIs</strong>, and <strong>front-end integration</strong>.
        </Text>

        <Box className={styles.techCard}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {techStack.map((tech, index) => (
              <Box key={index} className={styles.techItem}>
                <Box className={styles.techIcon}>
                  <tech.icon size={20} />
                </Box>
                <Text className={styles.techName}>{tech.name}</Text>
                {tech.detail && (
                  <Text className={styles.techDetail}>{tech.detail}</Text>
                )}
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        <Box textAlign="center">
          <button className={styles.viewMoreLink} onClick={onOpen}>
            See my full tech stack
            <IoMdOpen style={{ display: 'inline', marginLeft: '4px' }} />
          </button>
        </Box>
      </Box>

      <Box className={`${styles.aboutCorner} ${styles.aboutCornerTopRight}`} />
      <Box className={`${styles.aboutCorner} ${styles.aboutCornerBottomLeft}`} />
    </Box>
  )
}

export default memo(Detail)