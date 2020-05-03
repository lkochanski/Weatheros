import React from 'react';
import WeeklyForecastItem from "./WeeklyForecastItem";
import LoadingSpinner from "../../shared/LoadingSpinner";
import "./../../styles/WeeklyForecast.scss"

const WeeklyForecast = (props) => {

    if (props.weeklyForecast === undefined) {
        return (
            <div className={'weekly-forecast'}>
                <LoadingSpinner />
            </div>
        );
    } else {

        const days = props.weeklyForecast.map(item => (
            <WeeklyForecastItem key={item.dt} data={item} />
        ))

        return (
            <div className={'weekly-forecast'}>
                <h3>Prognoza na kolejne 7 dni</h3>
                {days}
            </div>
        )
    }

};

export default WeeklyForecast;
