'use client'

import { memo } from 'react'
import { Box } from '@chakra-ui/react'
import styles from './styles.module.css'

const DevStats = () => {
  return (
    <Box className={styles.devSection}>
      <Box className={styles.devBg}>
        <Box className={`${styles.devGlow} ${styles.devGlow1}`} />
        <Box className={styles.devGrid} />
      </Box>

      <Box className={styles.devContainer}>
        <Box textAlign="center">
          <span className={styles.sectionBadge}>Dev Stats</span>
          <h2 className={styles.sectionTitle}>
            GitHub <span>Activity</span>
          </h2>
        </Box>

        <Box className={styles.statsGrid}>
          <Box className={styles.statCard}>
            <img
              src="https://github-readme-stats-fast.vercel.app/api/streak?username=adimurianto&theme=radical"
              alt="GitHub Streak"
            />
          </Box>
          <Box className={styles.statCard}>
            <img
              src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=adimurianto&layout=compact&theme=radical"
              alt="Most Used Languages"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(DevStats)