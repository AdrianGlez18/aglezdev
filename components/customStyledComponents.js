import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

export const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

export const Section = ({ children, delay = 0 }) => (
  <AnimatePresence exitBeforeEnter initial={true}>
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
  </AnimatePresence>
)

export const Paragraph = styled.p`
text-align: justify;
text-indent: 1em;
`

export const RoundedFeaturedDiv = styled.div`
border-radius: 10%;
overflow: hidden;
position: relative;
`

export const ListElement = styled.li`
  margin: 1rem;
`