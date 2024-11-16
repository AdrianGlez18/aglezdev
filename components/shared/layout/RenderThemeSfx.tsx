import React from 'react'
import FallingLeaves from "@/components/shared/FallingLeaves";
import Sakura from "@/components/shared/Sakura";
import Snowfall from "react-snowfall";
import { themeType } from '@/lib/recoilStates';

const RenderThemeSfx = ({theme}: {theme: themeType}) => {
    if (theme === "fall") return <FallingLeaves />;
    if (theme === "spring") return <Sakura />;
    if (theme === "winter") return <Snowfall />;
    else return <div/>;
}

export default RenderThemeSfx
