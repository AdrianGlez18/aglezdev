import { Box, Container, Heading, Image, Stack, HStack, VStack, Tag, WrapItem, Wrap } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaGithub, FaLink, FaYoutube } from 'react-icons/fa'
import { Section } from "../components/customStyledComponents";
import { getDarkHome, getLightHome } from "../lib/imageMode";
import useTranslation from 'next-translate/useTranslation'
import { logEvent } from "../lib/ga";
import '../i18n.json'

const Details = ({ data }) => {
    const sourceCode = data["git"] ? <a href={data["git"]} target="_blank" rel="noreferrer" onClick={handleGithubClick} aria-label="Check the source code!" title="Check the source code!"><FaGithub size="2em" /></a> : "";
    const liveDemo = data["live"] ? <a href={data["live"]} target="_blank" rel="noreferrer" onClick={handleLinkClick} aria-label="Try it!" title="Try it!"><FaLink size="2em" /></a> : "";
    const videoResume = data["video"] ? <a href={data["video"]} target="_blank" rel="noreferrer" onClick={handleVideoClick} aria-label="Watch a video about it" title="Watch a video about it"><FaYoutube size="2em" /></a> : "";
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Box bg="transparent" align="center" mt={1}>
                        <VStack bg="transparent" align="center" >
                            <HStack spacing={8} align="center" mt={10} mb={5}>
                                {sourceCode}
                                {liveDemo}
                                {videoResume}
                            </HStack>
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}


export default Details;

const handleLinkClick = () => {
    logEvent({
        action: 'LiveDemo',
        params: {
            category: 'Social',
            label: 'Live Demo Clicked'
        }
    });
}

const handleGithubClick = () => {
    logEvent({
        action: 'Github',
        params: {
            category: 'Social',
            label: 'Details Github Clicked'
        }
    });
}

const handleVideoClick = () => {
    logEvent({
        action: 'Youtube',
        params: {
            category: 'Social',
            label: 'Details Video Clicked'
        }
    });
}