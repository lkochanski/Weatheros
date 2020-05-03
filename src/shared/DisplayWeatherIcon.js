import React from 'react';
import "../styles/weatherIcons/weather-icons.min.css";

const DisplayWeatherIcon = (props) => {

    const icons = {
        "01d": "wi-day-sunny",
        "02d": "wi-day-cloudy",
        "03d": "wi-cloud",
        "04d": "wi-cloudy",
        "09d": "wi-rain-mix",
        "10d": "wi-day-sleet",
        "11d": "wi-storm-showers",
        "13d": "wi-snow",
        "50d": "wi-fog",
        "01n": "wi-night-clear",
        "02n": "wi-night-alt-cloudy",
        "03n": "wi-cloud",
        "04n": "wi-cloudy",
        "09n": "wi-rain-mix",
        "10n": "wi-night-alt-showers",
        "11n": "wi-storm-showers",
        "13n": "wi-night-alt-snow",
        "50n": "wi-fog",
    }

    return (
        <div className={'current-weather-icon'}>
            <i className={`wi ${icons[props.iconType]}`} />
        </div>
    );
};

export default DisplayWeatherIcon;
