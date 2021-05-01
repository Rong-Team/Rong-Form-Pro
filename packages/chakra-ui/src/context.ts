import { createContext, useContext } from "react";


export interface UIInterface {
    colorScheme?: "whiteAlpha" | "blackAlpha" | "gray" | "red" | "orange" | "yellow" | "green" | "teal" | "blue" | "cyan" | "purple" | "pink" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"
    errorBorderColor?: string
    focusBorderColor?: string
    isFullWidth?: boolean
    size?: "sm" | "md" | "lg" | "xs"
    variant?: "outline" | "unstyled" | "filled" | "flushed"
}

const RootUIContext = createContext<null | UIInterface>(null);

export const UIProvider = RootUIContext.Provider;

export const useUI=()=>{
    const ui=useContext(RootUIContext)
    return ui
}