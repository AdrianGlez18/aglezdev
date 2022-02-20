import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
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
        <BgImage >
            <Container>
                <Box display={{ md: 'flex' }}>
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
        </BgImage>
    )
}

export default Videos;