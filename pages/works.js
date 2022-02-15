import { Box, Container, Heading, Image, HStack, VStack, Tag, SimpleGrid, Divider } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Section } from "../components/customStyledComponents";
import { getDarkHome, getLightHome } from "../lib/imageMode";
import { WorkItem } from "../components/work";

const Works = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>

                    <Box bg="transparent" align="center" mt={5}>
                        {
                            // Choose the image based on current theme :)
                            colorMode === 'light' ? getLightHome() : getDarkHome()
                        }

                        <Heading as="h2" variant="page-title" mt={5}>
                            Adrián González

                        </Heading>
                        <br />
                        <p>Web / Blockchain / Mobile / Games </p>


                        <VStack bg="transparent" align="center" >
                            <HStack spacing={8} align="center" mt={10} mb={5}>
                                <Link href="https://www.linkedin.com/in/adri%C3%A1n-gonz%C3%A1lez-hern%C3%A1ndez/" target="_blank norreferer"><FaLinkedin size="2em" /></Link>
                                <Link href="https://github.com/AdrianGlez18" target="_blank norreferer"><FaGithub size="2em" /></Link>
                            </HStack>
                        </VStack>

                        <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                Works
                            </Heading>
                            <p>List of my finished and ongoing projects. This web is still under development, so not all my projects are here yet.</p>
                            <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                                <Section>
                                    <WorkItem id="jtiweb" title="JTI Web" imageSource="/jtiweb.png" tags={['Web', 'React', 'NextJS', 'Finished']} size={[1920, 1080]}>
                                        Website I made for an event I coorganized at my university (in Spanish).
                                    </WorkItem>
                                </Section>
                                <Section>
                                    <WorkItem id="pdfheaven" title="PDF Heaven" imageSource="/pdfheaven.png" tags={['Web', 'NextJS', 'Ongoing']} size={[1920, 1080]}>
                                        Open source web app to work with pdfs (Join PDF, convert images, remove pages...)
                                    </WorkItem>
                                </Section>
                                <Section>
                                    <WorkItem id="jtiapp" title="JTI Mobile App" imageSource="/jtiapp.jpg" tags={['Mobile', 'Flutter', 'Finished']} size={[270, 480]}>
                                        Open source mobile app made for and event. Includes information about the event, and a QR code generating and reading system to send contact data to the companies.
                                    </WorkItem>
                                </Section>
                            </SimpleGrid>
                        </Section>
                    </Box>
                </Box>
            </Box>
            {useColorModeValue(<div />, <Snowfall snowflakeCount={100} />,)}
        </Container>
    )
}


export default Works;