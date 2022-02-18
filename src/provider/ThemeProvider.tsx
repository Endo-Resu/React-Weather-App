import React, {ReactNode, useState} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import {changeCSSRootVariables} from "../model/ChangeCSSRootVariables";

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
        changeCSSRootVariables(theme);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme
            }}
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}