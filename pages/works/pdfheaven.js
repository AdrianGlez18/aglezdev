import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import { Section } from "../../components/customStyledComponents";
import { getDarkHome, getLightHome } from "../../lib/imageMode";
import Profile from "../../components/profile";

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>

                    <Box bg="transparent" align="center" mt={5}>
                        <Profile />

                        <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                PDF Heaven
                            </Heading>
                            <p>This page is still under development!</p>
                        </Section>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Home;