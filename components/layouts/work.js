import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from "react"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Container maxW="container.md" pt={14}>
                <motion.article
                    initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.4, type: 'easeInOut' }}
                    style={{ position: 'relative' }}
                >
                        {children}
                </motion.article>
            </Container>
        </Box>
    )
}

export default Layout;