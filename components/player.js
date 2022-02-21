import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import { useColorModeValue, Button } from '@chakra-ui/react'

const Player = ({ url }) => {
    const [playing, setPlaying] = useState(false);
    const [audio] = useState(typeof Audio !== "undefined" && new Audio(url));

    useEffect(() => {
        playing ? audio.play() : audio.pause()

    }, [playing])

    const toggleVolume = () => setPlaying(!playing);

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
                    aria-label="Toggle volume"
                    onClick={toggleVolume}
                    colorScheme={useColorModeValue('cyan', 'customYellow')}
                >{playing ? <FaVolumeMute /> : <FaVolumeUp />}</Button>
            </motion.div>
        </AnimatePresence>
    );
};

export default Player;