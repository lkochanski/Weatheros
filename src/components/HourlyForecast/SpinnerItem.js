import React from 'react';
import DisplayWeatherIcon from "../../shared/DisplayWeatherIcon";


const SpinnerItem = (props) => {

    const unixTimestamp = props.data.dt;

    const date = new Date(unixTimestamp * 1000);

    const month = date.getMonth() + 1;
    const day = date.getDate()
    const hour = date.getHours();
    const year = date.getFullYear();

    const temp = Math.round(props.data.temp)


    return (
        <div className={'spinner-item noselect'}>
            <div className={'spinner-item-hour'}>
                <span id={'date'}>{day}/{month}/{year}</span>
                <span id={'hour'}>{hour}:00</span>
            </div>
            <div className={'spinner-item-icon'}>
                <DisplayWeatherIcon iconType={props.data.weather[0].icon} />
            </div>
            <div className={'spinner-item-temp'}>
                <span>{temp}°C</span>
            </div>

        </div>
    );
};

export default SpinnerItem;
