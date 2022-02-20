import { Box, Container, Heading, Image, Stack, HStack, VStack, Tag, WrapItem, Wrap } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Section } from "../components/customStyledComponents";
import useTranslation from 'next-translate/useTranslation'
import Profile from "../components/profile";
import '../i18n.json'

const Home = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t, lang } = useTranslation('home');
    const sectTitle = t('aboutTitle');
    const about = t('aboutText');
    return (
        <Container>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>

                    <Box bg="transparent" align="center" mt={5}>
                        <Profile/>

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

    )
}


export default Home;