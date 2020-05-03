import React from 'react';
import './../../styles/weatherIcons/weather-icons-wind.min.css'

const WindDirection = (props) => {

    const className = `wi wi-wind towards-${props.direction}-deg`;

    console.log(props.direction)


    const getDirection = (deg) => {
        let direction = ""
        if(deg < 23) direction = "północ"
        if(deg >= 24) direction = "płn. wschód"
        if(deg >= 69) direction = "wschód"
        if(deg >= 114) direction = "poł. wschód"
        if(deg >= 159) direction = "południe"
        if(deg >= 204) direction = "poł. zachód"
        if(deg >= 248) direction = "zachód"
        if(deg >= 294) direction = "płn. zachód"
        if(deg >= 336 && deg <= 659) direction = "północ"


        return direction

    }

    return (
        <>
        <i className={className}/><span>Kierunek wiatru: </span>{getDirection(props.direction)}
        </>

    );
};

export default WindDirection;
