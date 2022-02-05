import Logo from "./logo";
import NextLink from "next/link";
import { Link, Box, Container, Flex, Heading, Stack, Text, Menu, MenuButton, MenuItem, MenuList, IconButton, useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import ThemeButton from './themeButton'
//import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, currentPath, _target, children, ...props }) => {
  const isActive = (currentPath === href)
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const activeBgColor = useColorModeValue('grassTeal', 'grassTeal', "grassTeal")
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={isActive ? activeBgColor : undefined}
        color={isActive ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          w="100%"
          align={'center'}
          flexGrow={1}
          spacing={20}
          mt={{ base: 4, md: 0 }}
          ml={{ base: 4, md: 100 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/videos" path={path}>
            Videos
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/videos" passHref>
                  <MenuItem as={Link}>Videos</MenuItem>
                </NextLink>
                
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar