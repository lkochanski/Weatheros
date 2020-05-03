import React from 'react';
import "../../styles/CurrentWeather.scss";
import "../../styles/weatherIcons/weather-icons.min.css";
import CityTime from "./CityTime";
import DisplayWeatherIcon from "../../shared/DisplayWeatherIcon";

const CurrentWeather = (props) => {

    const currentTemp = Math.round(props.data.main.temp);
    const feelsLikeTemp = Math.round(props.data.main.feels_like);
    const maxTemp = Math.round(props.data.main.temp_max);
    const minTemp = Math.round(props.data.main.temp_min);


    return (
        <section className={'current-weather'}>
            <div className={'city-details'}>
                <div className={'city-name'}>
                    <span>{props.data.name}</span>
                    <span id={'city-country'}>{props.data.sys.country}</span>
                </div>
                <CityTime time={props.data.timezone}/>
            </div>

            <div className={'current-weather-wrapper'}>
                <DisplayWeatherIcon alt={props.data.weather[0].description}
                                    iconType={props.data.weather[0].icon}/>
                <div className={'current-weather-temperature'}>
                    <div className={'weather-description-wrapper'}>
                        <span className={'weather-description'}>{props.data.weather[0].description}</span>
                    </div>
                    <div className={'current-temperature'}>
                        <span id={'current-temp'}>{currentTemp}°C</span>
                        <span id={'feels-like-temp'}>Odczuwalna: {feelsLikeTemp}°C</span>
                        <div className={'minmax-temperature'}>
                            <span><i className="wi wi-thermometer-exterior" />Min: {minTemp}°C</span>
                            <span><i className="wi wi-thermometer" />Max: {maxTemp}°C</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'weather-details'}>
                <div className={'details-panel'}>
                    <i className="wi wi-cloudy" />
                    <span className={'details-desc'}>Zachmurzenie</span>
                    <span>{props.data.clouds.all}%</span>
                </div>
                <div className={'details-panel'}>
                    <i className="wi wi-strong-wind" />
                    <span className={'details-desc'}>Prędkość wiatru</span>
                    <span>{props.data.wind.speed} m/s</span>
                </div>
                <div className={'details-panel'}>
                    <i className="wi wi-raindrops" />
                    <span className={'details-desc'}>Wilgotność</span>
                    <span>{props.data.main.humidity}%</span>
                </div>
                <div className={'details-panel'}>
                    <i className="wi wi-barometer" />
                    <span className={'details-desc'}>Ciśnienie</span>
                    <span>{props.data.main.pressure} HpA</span>
                </div>
            </div>

        </section>
    );
};

export default CurrentWeather;
