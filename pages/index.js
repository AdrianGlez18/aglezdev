import { Box, Container, Heading, Image, Stack, HStack, VStack, Tag, WrapItem, Wrap } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import Link from "next/link";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Section } from "../components/customStyledComponents";
import { getDarkHome, getLightHome } from "../lib/imageMode";
import useTranslation from 'next-translate/useTranslation'
import '../i18n.json'

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t, lang } = useTranslation('home');
    const sectTitle = t('aboutTitle');
    const about = t('aboutText');
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
                                    {sectTitle}
                                </Heading>
                                {about}
                            </Section>
                            <Section delay={0.3}>
                                <Heading as="h3" variant="section-title">
                                    Skills
                                </Heading>
                                <Heading as="h4" variant="section-sub-title">
                                    Web (full-stack)
                                </Heading>
                                <Wrap spacing={3} align='center' justify='center'>
                                    <Tag size={'md'} key={'next'} variant='solid' colorScheme='teal'>Next.js</Tag>
                                    <Tag size={'md'} key={'react'} variant='solid' colorScheme='teal'>React</Tag>
                                    <Tag size={'md'} key={'express'} variant='solid' colorScheme='teal'>Express</Tag>
                                    <Tag size={'md'} key={'node'} variant='solid' colorScheme='teal'>Node.js</Tag>
                                    <Tag size={'md'} key={'mongodb'} variant='solid' colorScheme='teal'>MongoDB</Tag>
                                    <Tag size={'md'} key={'typescript'} variant='solid' colorScheme='teal'>Typescript</Tag>
                                </Wrap>
                                <Heading as="h4" variant="section-sub-title">
                                    Mobile
                                </Heading>
                                <Wrap spacing={3} align='center' justify='center'>
                                    <Tag size={'md'} key={'dart'} variant='solid' colorScheme='teal'>Dart</Tag>
                                    <Tag size={'md'} key={'flutter'} variant='solid' colorScheme='teal'>Flutter</Tag>
                                </Wrap>
                                <Heading as="h4" variant="section-sub-title">
                                    Blockchain
                                </Heading>
                                <Wrap spacing={3} align='center' justify='center'>
                                    <Tag size={'md'} key={'solidity'} variant='solid' colorScheme='teal'>Solidity</Tag>
                                    <Tag size={'md'} key={'web3'} variant='solid' colorScheme='teal'>Web3 (EVM + React/Next)</Tag>
                                </Wrap>
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

export default Home;