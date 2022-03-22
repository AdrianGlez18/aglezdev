import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
import Head from "next/head";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'
import { Section } from "../components/customStyledComponents";
import Profile from "../components/profile";
import { getDarkHome, getLightHome } from "../lib/imageMode";

const Videos = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const { t, lang } = useTranslation('common');
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
            <Head>
                    <title>Aglez Dev - Videos </title>
                    <meta name="description" content="Section to see all my published videos about coding or projects." />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="twitter:title" content="AglezDev" />
                    <meta property="og:title" content="AglezDev" />
                    <meta property="og:image" content="/og.png" />
                    <meta property="og:description" content="Section to see all my published videos about coding or projects." />
                    <meta property="og:url" content="https://aglez.dev" />
                    <meta property="og:type" content="website" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <Box flexGrow={1}>

                    <Box bg="transparent" align="center" mt={5}>
                        <Profile />
                        <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                Videos
                            </Heading>
                            <p>{t('dev')}</p>
                        </Section>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Videos;