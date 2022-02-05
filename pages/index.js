import { Box, Container, Heading, Image, HStack, VStack } from "@chakra-ui/react";
import Snowfall from "react-snowfall";
import styled from "@emotion/styled";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
import theme from "../lib/theme";
import { Section } from "../components/customStyledComponents";

const Home = () => {
    const { toggleColorMode } = useColorMode()

    return (
        <BgImage >
            <Container>


                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>

                        <Box bg="transparent" align="center" mt={5}>
                            <Image
                                borderColor="whiteAlpha.800"
                                borderWidth={2}
                                borderStyle="solid"
                                maxWidth="200px"
                                display="inline-block"
                                borderRadius="full"
                                src="panda.webp"
                                alt="Profile image"
                            />
                            
                            <Heading as="h2" variant="page-title" mt={5}>
                                Adrián González

                            </Heading>
                            <br />
                            <p>Web / Blockchain / Mobile / Games </p>


                            <VStack bg="transparent" align="center" >
                                <HStack spacing={8} align="center" mt={10} mb={10}>
                                    <FaLinkedin size="2em" />
                                    <FaGithub size="2em" />
                                    <FaTwitter size="2em" />
                                </HStack>
                            </VStack>

                            <Box borderRadius="lg" bg="red" p={5} mb={6} align="center">
                                Hello, I&apos;m a full stack developer.
                            </Box>
                            <Section delay={0.3}>
                            <Heading as="h3" variant="section-title">
                                On the web
                            </Heading>
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