/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Grid,
  GridItem,
  Stack,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import OpenGraphHead from 'components/Misc/OpenGraphHead'
import FadeInLayout from 'components/Layout/FadeWhenVisible'
import Menu from 'components/Menu'
import Sidebar from 'components/Sidebar'
import About from 'components/Sections/About'
import { GitHubHeatmap } from 'github-heatmap-widget';
import Experience from 'components/Sections/Experience'
import ScrollMore from 'components/Misc/ScrollMore'
// These are on bottom sections so no need to render it instantly
const GetInTouch = dynamic(() => import('components/Sections/GetInTouch'))

const Portfolio = (): JSX.Element => {
  const sideBarPadding = useBreakpointValue({ base: '5', md: '14', lg: '14' })
  const mainContent = useBreakpointValue({
    base: '5',
    md: '14',
    lg: '14',
    xl: 0,
  })
  const paddTop = useBreakpointValue({ base: '20', sm: 20, md: 20 })
  return (
    <>
      <OpenGraphHead />
      <Menu />
      <Grid
        id="mainGrid"
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(3, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        templateRows={{
          sm: 'repeat(1, 0)',
          lg: 'repeat(2, 1fr)',
        }}
        gap={4}
      >
        <GridItem
          padding={sideBarPadding}
          marginTop={paddTop}
          rowSpan={2}
          colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
          display="flex"
          alignContent="center"
          as="div"
          flexDirection={'row'}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          padding={mainContent}
          rowSpan={2}
          colSpan={{ base: 1, sm: 2, md: 2, lg: 3, xl: 3 }}
          overflow="hidden"
        >
          <Stack w="100" spacing={24}>
            <FadeInLayout>
              <Box
                id="aboutMe"
                className="contentRow"
                minH={{ lg: '70vh' }}
                display="flex"
                alignItems="center"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                flexDirection={{
                  base: 'column-reverse',
                  lg: 'row',
                }}
              >
                <About />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="devInfo" 
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 0 }}
                paddingBottom={{ base: 12, lg: 20 }}
                paddingX={0}
              >
                <Box
                  display="grid"
                  gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
                  gap={20}
                  width="75%"
                  alignItems="center"
                  justifyItems="stretch"
                >
                  <Box>
                    <img 
                      src="https://github-readme-stats-fast.vercel.app/api/streak?username=adimurianto&theme=radical" 
                      alt="GitHub Streak"
                      style={{ width: '100%', height: 'auto', padding: '5px' }}
                    />
                  </Box>
                  <Box>
                    <img 
                      src="https://github-readme-stats-fast.vercel.app/api/top-langs/?username=adimurianto&layout=compact&theme=radical" 
                      alt="Most Used Languages"
                      style={{ width: '100%', height: 'auto', padding: '5px' }}
                    />
                  </Box>
                </Box>
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="jobs"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 10 }}
                paddingBottom={{ base: 12, lg: 10 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <Experience />
              </Box>
            </FadeInLayout>
            <FadeInLayout>
              <Box
                id="contact"
                className="contentRow"
                paddingTop={{ base: 0, lg: 20, xl: 20 }}
                paddingX={0}
                flexDirection={'row'}
              >
                <GetInTouch />
              </Box>
            </FadeInLayout>
          </Stack>
        </GridItem>
      </Grid>
      <ScrollMore />
    </>
  )
}

export default Portfolio
