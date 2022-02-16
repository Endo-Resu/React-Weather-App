import React from "react";
import {Item} from "../ThisDayInfo/ThisDayInfo";
import s from '../ThisDayInfo/ThisDayInfo.module.scss';
import {IndicatorSVGSelector} from "../../../../assets/images/icons/indicators/IndicatorSVGSelector";

interface Props {
    item: Item
}

export const ThisDayItem = ({item}: Props) => {
    const {icon_id, name, value} = item

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSVGSelector id={icon_id}/>
            </div>
            <div className={s.indicator__name}>{name}</div>
            <div className={s.indicator__value}>{value}</div>
        </div>
    )
}