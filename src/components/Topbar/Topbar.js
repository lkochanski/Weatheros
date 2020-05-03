import React from 'react';
import SearchInput from "./SearchInput";
import "../../styles/Topbar.scss";
import "../../styles/weatherIcons/weather-icons.min.css";
import ErrorDisplay from "./ErrorDisplay";

const Topbar = (props) => {
    return (
        <div className={'topbar'}>
            <div className={'topbar-wrapper'}>
                <span><i className="wi wi-day-fog"></i><strong>Weatheros</strong></span>
                <div className={'input-wrapper'}>
                <SearchInput handleChange={props.handleChange}
                             handleSubmit={props.handleSubmit}
                             error={props.error}
                             value={props.value}
                />
                    {props.error != null ? <ErrorDisplay message={"Nic nie znaleziono. Sprawdź czy nazwa miasta jest poprawna."} /> : null}
                    {props.empty ? <ErrorDisplay message={"Proszę wpisać nazwę miasta, którego szukasz."} /> : null}
                </div>
            </div>
        </div>
    );
};

export default Topbar;
