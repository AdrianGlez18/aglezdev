import React from 'react'
import FallingLeaves from "@/components/shared/FallingLeaves";
import Sakura from "@/components/shared/Sakura";
import Snowfall from "react-snowfall";

const RenderThemeSfx = ({theme}: any) => {
    console.log(theme)
    if (theme === "fall") return <FallingLeaves />;
    if (theme === "spring") return <Sakura />;
    else return <Snowfall />;
}

export default RenderThemeSfx
