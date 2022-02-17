import React, {useEffect} from "react";
import Select from 'react-select'
import {GlobalSVGSelector} from "../../assets/images/icons/global/GlobalSVGSelector";
import s from './Header.module.scss'
import {useTheme} from "../../hooks/useTheme";

interface Props {

}

export const Header = (props: Props) => {
    const theme = useTheme();

    const options = [
        {value: 'city-1', label: 'Санкт-Петербург'},
        {value: 'city-2', label: 'Москва'},
        {value: 'city-3', label: 'Новгород'},
    ];

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === 'dark' ? '#ffffff' : '#000000',
        })
    };

    const setTheme = () => {
        theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;

        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color'
        ];

        components.forEach(component => {
            root.style.setProperty(
              `--${component}-default`,
                `var(--${component}-${theme.theme})`
            );
        })
    }, [theme.theme]);

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id="header-logo"/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div
                    className={s.change__theme}
                    onClick={setTheme}
                >
                    <GlobalSVGSelector id="change-theme"/>
                </div>
                <Select
                    defaultValue={options[0]}
                    styles={colourStyles}
                    options={options}
                />
            </div>
        </header>
    )
}