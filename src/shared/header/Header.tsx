import React from "react";
import Select from 'react-select'
import {GlobalSVGSelector} from "../../assets/images/icons/global/GlobalSVGSelector";
import s from './Header.module.scss'

interface Props {
    
}

export const Header = (props: Props) => {
    const options = [
        {value: 'chocolate', label:'Chocolate'},
        {value: 'strawberry', label:'Strawberry'},
        {value: 'vanilla', label:'Vanilla'},
    ]

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
                <Select options={options} />
            </div>
        </header>
    )
}