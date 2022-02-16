import { Box, Container, Heading, Image, HStack, VStack, Tag } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import useTranslation from 'next-translate/useTranslation'
import { Section } from "../components/customStyledComponents";
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
                                    Videos
                                </Heading>
                                <p>{t('dev')}</p>
                            </Section>
                        </Box>
                    </Box>
                </Box>
                {useColorModeValue(<div />, <Snowfall snowflakeCount={100} />,)}
            </Container>
        </BgImage>
    )
}

const BgImage = styled.div`
backgroudImage: url('bg.svg');
`

export default Videos;