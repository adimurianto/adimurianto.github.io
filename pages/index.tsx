/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Hero from 'components/Hero'
import About from 'components/Sections/About'
import Experience from 'components/Sections/Experience'
import DevStats from 'components/Sections/DevStats'
import FeaturedWorks from 'components/Sections/FeaturedWorks'
// These are on bottom sections so no need to render it instantly
const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'))

const Portfolio = (): JSX.Element => {
  return (
    <>
      <OpenGraphHead />
      <Menu />

      {/* Hero Section - Full Width */}
      <Hero />

      {/* Main Content Area - Matching Hero Style */}
      <Box
        as="main"
        position="relative"
        bg="linear-gradient(180deg, #121218 0%, #0a0a0f 100%)"
        overflow="hidden"
      >
        {/* About Section */}
        <FadeInLayout>
          <Box
            id="aboutMe"
            className="contentRow"
            width="full"
            p={0}
          >
            <About />
          </Box>
        </FadeInLayout>

        {/* Dev Info Section */}
        <FadeInLayout>
          <Box
            id="devInfo"
            className="contentRow"
            width="full"
            p={0}
          >
            <DevStats />
          </Box>
        </FadeInLayout>

        {/* Projects Section */}
        <FadeInLayout>
          <Box
            id="projects"
            className="contentRow"
            width="full"
            p={0}
          >
            <FeaturedWorks />
          </Box>
        </FadeInLayout>

        {/* Experience Section */}
        <FadeInLayout>
          <Box
            id="jobs"
            className="contentRow"
            width="full"
            p={0}
          >
            <Experience />
          </Box>
        </FadeInLayout>

        {/* Contact Section */}
        <FadeInLayout>
          <Box
            id="contact"
            className="contentRow"
            width="full"
            p={0}
          >
            <GetInTouch />
          </Box>
        </FadeInLayout>
      </Box>
    </>
  )
}

export default Portfolio