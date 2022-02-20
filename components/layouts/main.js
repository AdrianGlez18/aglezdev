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
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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