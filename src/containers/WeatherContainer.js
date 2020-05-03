import React, {Component} from 'react';
import CurrentWeather from "../components/CurrentForecast/CurrentWeather";
import LoadingPage from "../shared/LoadingPage";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import WeeklyForecast from "../components/WeeklyForecast/WeeklyForecast";

class WeatherContainer extends Component {
    render()
    {
        if(this.props.data.base != null && this.props.loading === false && !this.props.error) {
            return (
                <div className={'weather-container'}>
                    <CurrentWeather data={this.props.data} />
                    <HourlyForecast hourlyForecast={this.props.fullForecast.hourly}  />
                    <WeeklyForecast weeklyForecast ={this.props.fullForecast.daily} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <LoadingPage error={this.props.error} loading={this.props.loading} />
                </div>
            )
        }
    }
}

export default WeatherContainer;