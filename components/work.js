import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, Tag, LinkBox, LinkOverlay, HStack, VStack } from '@chakra-ui/react';
import { RoundedFeaturedDiv } from './customStyledComponents';

export const Work = ({ children, href, title, imageSource, tags }) => {
    return (
        <Box w={"100%"} align="center">
            <LinkBox cursor={'pointer'}>
                <Image src={imageSource} alt={title} placeholder="blur" loading='lazy' />
                <LinkOverlay href={href}>
                    <Text mt={2}>{title}</Text>
                    <VStack>
                        <HStack spacing={2}>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <Tag key={index} size="md" variantColor="teal" mr={2}>{tag}</Tag>
                                    )
                                })
                            }
                        </HStack>
                    </VStack>
                </LinkOverlay>
                <Text fontSize={14} fontWeight={'bold'} mt={2}>{children}</Text>
            </LinkBox>
        </Box>
    )
}

export const WorkItem = ({ children, id, title, imageSource, tags, size }) => {
    return (
        <Box w={"100%"} align="center" mt={3}>
            <Link href={`/works/${id}`}>
                <LinkBox cursor={'pointer'}>
                    <Image src={imageSource} alt={title} width={size[0]} height={size[1]} mt={3} />
                    <LinkOverlay href={`/works/${id}`}>
                        <Text mt={2} fontSize={20}>
                            {title}
                        </Text>
                    </LinkOverlay>
                    <VStack>
                        <HStack spacing={2} mt={2}>
                            {
                                tags.map((tag, index) => {
                                    return (
                                        <Tag key={index} size="md" variant='solid' colorScheme='teal' mr={2}>{tag}</Tag>
                                    )
                                })
                            }
                        </HStack>
                    </VStack>
                    <Text fontSize={14} mt={1}>{children}</Text>
                </LinkBox>
            </Link>
        </Box>
    )
}

export const WorkFeatured = ({ children, id, title, imageSource, tags, size }) => {
    return (
        <Box w={"100%"} align="center" mb={3}>

            <RoundedFeaturedDiv mt={5} mb={5}>
                <img src={imageSource} alt={title} width={size[0]} height={size[1]} />
            </RoundedFeaturedDiv>
            <Box w={"100%"} align="center" mt={3}>
                <p mt={5}>
                    Website: <a href="https://pdfheaven.netlify.app/" target="_blank">{title}</a>
                </p>
            </Box>
            <Box w={"100%"} align="center" mt={3}>
                <p mt={5}>
                    Warning: The website is still under construction. There are some bugs and some features in development might not work properly.
                </p>
            </Box>
            <VStack>
                <HStack spacing={2} mt={5} mb={5}>
                    {
                        tags.map((tag, index) => {
                            return (
                                <Tag key={index} size="md" variant='solid' colorScheme='teal' mr={2}>{tag}</Tag>
                            )
                        })
                    }
                </HStack>
            </VStack>

        </Box>
    )
}