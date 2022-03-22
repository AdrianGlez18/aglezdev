import { mode } from '@chakra-ui/theme-tools'
import Link from 'next/link';
import { Box, Container, Heading, Image, HStack, VStack } from "@chakra-ui/react";

export const getLightHome = () => {
    return <Box mb={5}>
        <Link href={'/'}>
            <Image
                maxWidth="200px"
                display="inline-block"
                borderRadius="full"
                src="/panda-light-min-200.webp"
                alt="Profile image"
                width="200px"
                height="200px"
            />
        </Link>
    </Box>
}

export const getDarkHome = () => {
    return <Box mb={5}>
        <Link href={'/'}>
            <Image
                maxWidth="200px"
                display="inline-block"
                borderRadius="full"
                src="/panda-dark-min-200.webp"
                alt="Profile image"
                width="200px"
                height="200px"
            />
        </Link>
    </Box>
}

