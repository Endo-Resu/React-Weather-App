import React from "react";
import s from './Header.module.scss'
import {GlobalSVGSelector} from "../../assets/images/icons/global/GlobalSVGSelector";

interface Props {
    
}

export const Header = (props: Props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id="header-logo"/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change__theme}>
                    <GlobalSVGSelector id="change-theme"/>
                </div>
            </div>
        </header>
    )
}