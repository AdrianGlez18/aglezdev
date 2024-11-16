import { themeState } from '@/lib/recoilStates';
import React from 'react'
import { useRecoilState } from 'recoil';
import RenderThemeSfx from './RenderThemeSfx';

const SfxContainer = ({children}: {children: React.ReactNode}) => {
    const [currentTheme, setCurrentTheme] = useRecoilState(themeState);
  return (
    <div>
        {children}
        <RenderThemeSfx theme={currentTheme} />
    </div>
  )
}

export default SfxContainer