import React, {ReactNode, useState} from "react";
import {Theme, ThemeContext} from "../context/ThemeContext";
import {changeCSSRootVariables} from "../model/ChangeCSSRootVariables";
import {storage} from "../model/Storage";

interface Props {
    children: ReactNode
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);

    changeCSSRootVariables(theme);

    const changeTheme = (theme: Theme) => {
        storage.setItem('theme', theme);
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