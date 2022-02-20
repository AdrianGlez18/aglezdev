import { Box, Container, Heading, Image, HStack, VStack, Tag, SimpleGrid, Divider } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Section } from "../components/customStyledComponents";
import { getDarkHome, getLightHome } from "../lib/imageMode";
import { WorkItem } from "../components/work";
import useTranslation from 'next-translate/useTranslation'
import Profile from "../components/profile";

const Works = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t, lang } = useTranslation('works');
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>

                    <Box bg="transparent" align="center" mt={5}>
                        <Profile />
                        <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                {t('title')}
                            </Heading>
                            <p>{t('desc')}</p>
                            <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                                <Section>
                                    <WorkItem id="jtiweb" title="JTI Web" imageSource="/jtiweb.png" tags={['Web', 'React', 'NextJS', 'Finished']} size={[1920, 1080]}>
                                        {t('jtiweb')}
                                    </WorkItem>
                                </Section>
                                <Section>
                                    <WorkItem id="pdfheaven" title="PDF Heaven" imageSource="/pdfheaven.png" tags={['Web', 'NextJS', 'Ongoing']} size={[1920, 1080]}>
                                        {t('pdfheaven')}
                                    </WorkItem>
                                </Section>
                                <Section>
                                    <WorkItem id="jtiapp" title="JTI Mobile App" imageSource="/jtiapp.jpg" tags={['Mobile', 'Flutter', 'Finished']} size={[270, 480]}>
                                        {t('jtiapp')}
                                    </WorkItem>
                                </Section>
                            </SimpleGrid>
                        </Section>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}


export default Works;