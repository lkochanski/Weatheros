import React from 'react';
import "../../styles/HourlyForecast.scss"
import LoadingSpinner from "../../shared/LoadingSpinner";
import HourlySpinner from "./HourlySpinner";


const HourlyForecast = (props) => {

    if (props.hourlyForecast === undefined) {
        return (
            <LoadingSpinner />
        )
    } else {
        return (
            <div className={'hourly-forecast-wrapper'}>
                <div className={'panel-title'}>
                    <h3>Prognoza na 48 godzin</h3>
                </div>
                <HourlySpinner hourlyForecast={props.hourlyForecast} />
            </div>
        );
    }



}

export default HourlyForecast;