import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import Snowfall from "react-snowfall";
import Navbar from "../navbar";
import React from "react" 
React.useLayoutEffect = React.useEffect 

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <title>Aglez Dev - Home </title>
                <meta name="description" content="Portfolio to show all my skills, projects and posts." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="twitter:title" content="AglezDev" />
                <meta property="og:title" content="AglezDev" />
                <meta property="og:image" content="/og.png" />
                <meta property="og:description" content="Portfolio to show all my skills, projects and posts." />
                <meta property="og:url" content="https://aglez.dev" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <Navbar path={router.asPath} /> 

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            {useColorModeValue(<div />, <Snowfall snowflakeCount={100} />,)}
        </Box>
    )
}

export default Main;