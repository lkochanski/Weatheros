import React, {Component} from 'react';
import '../styles/App.css';
import MainContentContainer from "../containers/MainContentContainer";


class App extends Component {

    state = {
        update: true,
        loading: true,
        error: null,
        fullForecastError: null,
        emptyInput: false,
        searchedCity: "",
        startCity: "Katowice",
        units: "metric",
        cityLat: null,
        cityLon: null,
        currentCityData: {},
        fullForecast: {},
    }

    API = {
        key: "78165b968fac88b2722ee7ab1fe4c9f3",
        base: "http://api.openweathermap.org/data/2.5"
    }

    queryBySearchedCity = (city) => {
        const queryByCity = `${this.API.base}/weather?q=${city}&units=${this.state.units}&appid=${this.API.key}&lang=pl`;

        fetch(queryByCity)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw new Error(response.status);
            })
            .then(response => response.json())
            .then(currentCityData => {
                setTimeout(()=> {
                    this.setState({
                        currentCityData,
                        loading: false,
                        error: null,
                        searchedCity: "",
                        cityLat: currentCityData.coord.lat,
                        cityLon: currentCityData.coord.lon,
                        update: true,
                    });
                },500)
            }).catch(error => {
            this.setState({
                error,
                loading: false,
            })
        })
    }

    queryFullForecast = () => {
        const queryFullWeather = `${this.API.base}/onecall?lat=${this.state.cityLat}&lon=${this.state.cityLon}&units=${this.state.units}&appid=${this.API.key}&lang=pl`;

        fetch(queryFullWeather)
            .then(response => {
                if(response.ok) {
                    return response;
                }
                throw new Error(response.status);
            })
            .then(response => response.json())
            .then(fullForecast => {
                this.setState({
                    fullForecast
                })
            }).catch(error => {
                this.setState({
                    fullForecastError: error
                })
        })

    }


    componentDidMount() {
        this.queryBySearchedCity(this.state.startCity);
        this.setState({
            loading: false,
        })
    }

    componentDidUpdate() {
        if(this.state.update && this.state.cityLon && this.state.cityLat) {
          this.queryFullForecast()

          this.setState({
              update: false
          })
        }
    }


    handleChange = (e) => {
        this.setState({
            searchedCity: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.searchedCity.length > 0) {
            this.queryBySearchedCity(this.state.searchedCity)
            this.setState({
                emptyInput: false,
                loading: true,
            })
        } else if (this.state.searchedCity.length <= 0) {
            this.setState({
                emptyInput: true,
            })
        }
    }

    render() {

        if(this.state.error != null) {
            console.log(this.state.error)
        }

        return (
            <div className={'App'}>
                <MainContentContainer data={this.state.currentCityData}
                                      fullForecast={this.state.fullForecast}
                                      handleChange={this.handleChange}
                                      handleSubmit={this.handleSubmit}
                                      loading={this.state.loading}
                                      error={this.state.error}
                                      value={this.state.searchedCity}
                                      empty={this.state.emptyInput}
                />
            </div>
        );
    }
}

export default App;


