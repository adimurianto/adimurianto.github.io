'use client'

import { memo, useState } from 'react'
import {
  Text,
  Link,
  Box,
  Image,
  Icon,
} from '@chakra-ui/react'
import { IoMdOpen } from 'react-icons/io'
import { FiCode } from 'react-icons/fi'
import styles from './styles.module.css'
import { ExperiencesList } from 'config/experience'

const ExperienceTab = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Box className={styles.experienceSection}>
      <Box className={styles.experienceBg}>
        <Box className={`${styles.experienceGlow} ${styles.experienceGlow1}`} />
        <Box className={`${styles.experienceGlow} ${styles.experienceGlow2}`} />
        <Box className={styles.experienceGrid} />
      </Box>

      <Box className={styles.experienceContainer}>
        <Box textAlign="center" mb={8}>
          <span className={styles.sectionBadge}>Experience</span>
          <h2 className={styles.sectionTitle}>
            <span>Places I've Worked</span>
          </h2>
        </Box>

        <Text className={styles.experienceDesc}>
          Since 2018, I've had the privilege to work with several companies that
          enabled me to hone my skills and talents. Currently, I'm working as a{' '}
          <Link
            href="https://adimurianto.com"
            isExternal
          >
            Freelance Full Stack Developer
          </Link>
          .
        </Text>

        <Box className={styles.experienceCard}>
          <Box className={styles.experienceContent}>
            {/* Tab buttons */}
            <Box className={styles.tabList}>
              {ExperiencesList.map((item, idx) => (
                <button
                  key={item.name}
                  className={`${styles.tabBtn} ${idx === activeIndex ? styles.tabBtnActive : ''}`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {item.logo.dark || item.logo.light ? (
                    <Image
                      src={item.logo.dark || item.logo.light}
                      alt={item.longName}
                      className={styles.tabLogo}
                      fallback={
                        <Box className={styles.tabLogo} bg="whiteAlpha.50" borderRadius="8px" display="flex" alignItems="center" justifyContent="center">
                          <Icon as={FiCode} boxSize={5} color="#23f9fe" />
                        </Box>
                      }
                    />
                  ) : (
                    <Box className={styles.tabLogo} bg="whiteAlpha.50" borderRadius="8px" display="flex" alignItems="center" justifyContent="center">
                      <Icon as={FiCode} boxSize={5} color="#23f9fe" />
                    </Box>
                  )}
                  <Box>
                    <Text fontSize="xs" color="inherit" fontWeight={idx === activeIndex ? 600 : 400}>
                      {item.name}
                    </Text>
                  </Box>
                </button>
              ))}
            </Box>

            {/* All panels stacked */}
            <Box className={styles.tabPanel}>
              {ExperiencesList.map((item, idx) => (
                <Box
                  key={item.name}
                  style={{ visibility: idx === activeIndex ? 'visible' : 'hidden', opacity: idx === activeIndex ? 1 : 0, transition: 'opacity 0.3s ease' }}
                >
                  <Box className={styles.roleHeader}>
                    <Text className={styles.rolePosition}>
                      {item.position}
                    </Text>
                    <Link
                      href={item.url}
                      isExternal
                      className={styles.roleCompany}
                    >
                      {item.name}
                      <IoMdOpen size={14} />
                    </Link>
                    <Text className={styles.roleDuration}>
                      {item.duration}
                    </Text>
                  </Box>

                  <ul className={styles.roleList}>
                    {item.roles?.map((role, idx) => (
                      <li key={idx} className={styles.roleItem}>
                        {role}
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={`${styles.experienceCorner} ${styles.experienceCornerTopLeft}`} />
      <Box className={`${styles.experienceCorner} ${styles.experienceCornerBottomRight}`} />
    </Box>
  )
}

export default memo(ExperienceTab)