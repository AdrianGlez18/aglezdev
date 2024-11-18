import React from 'react'
import FallingLeaves from "@/components/shared/FallingLeaves";
import Sakura from "@/components/shared/Sakura";
import Snowfall from "react-snowfall";
import SummerBubbles from '../SummerBubbles';
import { themeType } from '@/lib/recoilStates';

const RenderThemeSfx = ({theme}: {theme: themeType}) => {
    if (theme === "fall") return <FallingLeaves />;
    if (theme === "spring") return <Sakura />;
    if (theme === "winter") return <Snowfall />;
    if (theme === "summer") return <SummerBubbles />;
    else return <div/>;
}

export default RenderThemeSfx
