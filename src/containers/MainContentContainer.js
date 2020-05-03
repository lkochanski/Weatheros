import React from 'react';
import "../styles/MainContentContainer.scss";
import Topbar from "../components/Topbar/Topbar";
import WeatherContainer from "./WeatherContainer";

const MainContentContainer = (props) => {
    return (
        <div className={"main-content-container"}>
            <Topbar handleChange={props.handleChange}
                    handleSubmit={props.handleSubmit}
                    error={props.error}
                    value={props.value}
                    empty={props.empty}
            />
        <WeatherContainer data={props.data}
                          error={props.error}
                          loading={props.loading}
                          fullForecast={props.fullForecast}
        />
        </div>
    );
};

export default MainContentContainer;