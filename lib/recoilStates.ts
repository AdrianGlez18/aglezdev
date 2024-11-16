import {atom} from 'recoil';

declare type langType = "es" | "en" | "fr";
export type themeType = "spring" | "summer" | "fall" | "winter" | "dark-spring" | "dark-summer" | "dark-fall" | "dark-winter";

export const localeState = atom({
    key: 'localeState',
    default: 'en' as langType
})

export const themeState = atom({
    key: 'themeState',
    default: 'fall' as themeType
})