import React from 'react';
import DisplayWeatherIcon from "../../shared/DisplayWeatherIcon";
import "../../styles/weatherIcons/weather-icons.min.css"
import WindDirection from "./WindDirection";

const WeeklyForecastItem = (props) => {

    const unixTimestamp = props.data.dt;
    const date = new Date(unixTimestamp * 1000);

    const unixTimestampSunrise = props.data.sunrise;
    const unixTimestampSunSet = props.data.sunset;

    const sunriseDate = new Date(unixTimestampSunrise * 1000);
    const sunsetDate = new Date(unixTimestampSunSet * 1000);

    const sunriseHour = sunriseDate.getHours();
    const sunriseMinutes = sunriseDate.getMinutes();

    const sunsetHour = sunsetDate.getHours();
    const sunsetMinutes = sunsetDate.getMinutes();

    const dayIndex = date.getDay();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    const daysNames = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    const monthNames = ["Stycznia", "Lutego", "Marca", "Kwietnia", "Maja", "Czerwca", "Lipca", "Sierpnia", "Września", "Października", "Listopada", "Grudnia"];

    const displayTemperature = (temperature) => Math.round(temperature);

    return (
        <section className={'weekly-forecast-item'}>

            <div className={'date'}>
                <span>{daysNames[dayIndex]}, {day} {monthNames[monthIndex]} {year} r.</span>
                <div className={'sunrise-sunset'}>
                    <span id={'sunrise'}><i className="wi wi-sunrise"/>
                        {sunriseHour > 9 ? sunriseHour : "0" + sunriseHour}:{sunriseMinutes > 9 ? sunriseMinutes : "0" + sunriseMinutes}
                    </span>
                    <span id={'sunset'}><i className="wi wi-sunset"/>
                        {sunsetHour > 9 ? sunsetHour : "0" + sunsetHour}:{sunsetMinutes > 9 ? sunsetMinutes : "0" + sunsetMinutes}
                    </span>
                </div>
            </div>
            <div className={'weekly-forecast-weather'}>
                <div className={'weekly-wrapper'}>
                    <div className={'weekly-forecast-icon'}>
                        <DisplayWeatherIcon iconType={props.data.weather[0].icon}/>
                        <span id={'desc'}>{props.data.weather[0].description}</span>
                    </div>
                    <div className={'weekly-forecast-temperature'}>
                        <span id={'main-temp'}>{displayTemperature(props.data.temp.day)}°C</span>
                        <span id={'feels-like'}>odczuwalna: {displayTemperature(props.data.feels_like.day)}°C</span>
                    </div>
                    <div className={'weekly-forecast-minmax'}>
                        <span>
                            <i className="wi wi-thermometer-exterior"/><span>Min:</span> {displayTemperature(props.data.temp.min)}°C
                        </span>
                        <span>
                            <i className="wi wi-thermometer"/><span>Max:</span> {displayTemperature(props.data.temp.max)}°C
                        </span>
                        <span>
                            <i className="wi wi-night-clear"/><span>Noc:</span> {displayTemperature(props.data.temp.night)}°C
                        </span>
                    </div>
                </div>
                <div className={'weekly-forecast-details'}>
                    <div className={'details-column'}>
                        <div className={'details-row'}>
                            <i className="wi wi-cloud"/><span className={'hide'}>Zachmurzenie: </span>{props.data.clouds} %
                        </div>
                        <div className={'details-row'}>
                            <i className="wi wi-sprinkle"/><span>Opady: </span>{props.data.rain ? props.data.rain : "0.00"} mm
                        </div>
                    </div>
                    <div className={'details-column'}>
                        <div className={'details-row'}>
                            <i className="wi wi-strong-wind"/><span>Wiatr: </span>{props.data.wind_speed} m/s
                        </div>
                        <div className={'details-row'}>
                            <WindDirection direction={props.data.wind_deg}/>
                        </div>
                    </div>
                    <div className={'details-column'}>
                        <div className={'details-row'}>
                            <i className="wi wi-humidity"/><span>Wilgotność: </span>{props.data.humidity} %
                        </div>
                        <div className={'details-row'}>
                            <i className="wi wi-barometer"/><span>Ciśnienie: </span>{props.data.pressure} HpA
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WeeklyForecastItem;
