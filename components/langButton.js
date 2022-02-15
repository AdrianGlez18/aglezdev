import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue, Button } from '@chakra-ui/react'
import { SunIcon, StarIcon, MoonIcon } from '@chakra-ui/icons'
import { US, ES } from 'country-flag-icons/string/3x2'
import useTranslation from 'next-translate/useTranslation'
import styled from '@emotion/styled'
import setLanguage from 'next-translate/setLanguage'
import Flags from 'country-flag-icons/react/3x2'


const LangButton = ({lang}) => {
  const { toggleColorMode } = useColorMode()
  
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          aria-label="Toggle language"
          onClick={async () => {
            //const { t, lang } = useTranslation('common');
            await setLanguage(lang === 'es' ? 'en' : 'es')}}
          colorScheme={useColorModeValue('blue', 'red')}
        >{getLangFlag(lang)}</Button>
        
      </motion.div>
    </AnimatePresence>
  )
}

export default LangButton

const getLangFlag = (lang) => {
    switch (lang) {
        case 'es':
            return '🇪🇸';
        case 'en':
            return '🇺🇸';
        default:
            return '🇺🇸';
    }
}

