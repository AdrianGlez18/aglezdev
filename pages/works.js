import { Box, Container, Heading, Image, HStack, VStack, Tag, SimpleGrid, Divider } from "@chakra-ui/react";
import Head from "next/head";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Section } from "../components/customStyledComponents";
import { WorkItem } from "../components/work";
import useTranslation from 'next-translate/useTranslation'
import Profile from "../components/profile";
import { projects } from "../data/projects";

const Works = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t, lang } = useTranslation('works');
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Head>
                    <title>Aglez Dev - Works </title>
                    <meta name="description" content="Section to see all my ongoing and finished code projects." />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="twitter:title" content="AglezDev" />
                    <meta property="og:title" content="AglezDev" />
                    <meta property="og:image" content="/og.png" />
                    <meta property="og:description" content="Section to see all my ongoing and finished code projects." />
                    <meta property="og:url" content="https://aglez.dev" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>

                <Box flexGrow={1}>
                    <Box bg="transparent" align="center" mt={5}>
                        <Profile />
                        <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                {t('title')}
                            </Heading>
                            <p>{t('desc')}</p>
                            <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                                {
                                    projects.map(project => {
                                        return (
                                            <Section>
                                                <WorkItem id={project.id} title={project.title} imageSource={project.imageSource} tags={project.tags} size={project.size}>
                                                    {t('jtiweb')}
                                                </WorkItem>
                                            </Section>
                                        )
                                    })
                                }
                            </SimpleGrid>
                        </Section>
                        <Section delay={0.3}>
                            <Heading as="h4" variant="section-title">
                                {t('secondary_title')}
                            </Heading>
                            <p>{t('secondary_desc')}</p>
                            <SimpleGrid columns={[1, 1, 2]} spacing={5}>
                                <Section>
                                    <WorkItem id="crypto-svelte" title="Crypto Market Prices in Svelte" imageSource="/crypto_svelte.png" tags={['Web', 'Svelte', 'Ongoing']} size={[1920, 1080]}>
                                        {t('crypto_svelte')}
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