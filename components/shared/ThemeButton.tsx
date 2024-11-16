"use client"

import { changeTheme } from '@/lib/utils';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';
import {useRecoilState} from 'recoil';
import { localeState, themeState, themeType } from '@/lib/recoilStates';

function ThemeButton() {

  const [currentTheme, setCurrentTheme] = useRecoilState(themeState);

  const setTheme = (theme: themeType) => {
    changeTheme(theme)
    setCurrentTheme(theme)
    /* console.log(currentTheme) */
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className='bg-buttons m-2'>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
{/*           <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
 */}          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className='bg-primary'>
        <DropdownMenuItem onClick={() => setTheme("spring")}>
          Spring
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("summer")}>
          Summer
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("fall")}>
          Fall
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("winter")}>
          Winter
        </DropdownMenuItem>
        {/* <DropdownMenuItem onClick={() => changeTheme("dark-spring")}>
          Spring Night
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("dark-summer")}>
          Summer Night 
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("dark-fall")}>
          Fall Night
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeTheme("dark-winter")}>
          Winter Night
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default ThemeButton;
