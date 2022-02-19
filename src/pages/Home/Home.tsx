import React, {useEffect} from 'react';
import {ThisDay} from "./components/ThisDay/ThisDay";
import s from "./Home.module.scss";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../hooks/store";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../store/selectors";



interface Props {}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(selectCurrentWeatherData);

    useEffect(() => {
        dispatch(fetchCurrentWeather('tyumen'))
    }, [])

    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo />
            </div>
            <Days />
        </div>
    )
}