import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Snowfall from "react-snowfall";
import Navbar from "../navbar";
import React from "react"
React.useLayoutEffect = React.useEffect

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <motion.article
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.4, type: 'easeInOut' }}
                    style={{ position: 'relative' }}
                >
                    <>
                        {title && (
                            <Head>
                                <title>{title} - AglezDev</title>
                                <meta name="twitter:title" content={title} />
                                <meta property="og:title" content={title} />
                            </Head>
                        )}
                        {children}

                        {/*<GridItemStyle />*/ }
                    </>
                </motion.article>
            </Container>
            {useColorModeValue(<div />, <Snowfall snowflakeCount={100} />,)}
        </Box>
    )
}

export default Layout;