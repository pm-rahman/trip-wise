import { ThemeContext } from "@/Providers/ThemeProvider";
import { useContext } from "react";

const useTheme = () => {
    const theme = useContext(ThemeContext);
    const isClient = typeof window !=="undefined";
    if(!theme&&!isClient) return {}
    if(!theme){
        throw new Error("you must wrap your application with Theme provider or use the useTheme")
    }
    return theme;
};

export default useTheme;