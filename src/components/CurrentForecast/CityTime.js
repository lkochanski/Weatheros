import React, {Component} from 'react';
import LoadingSpinner from "../../shared/LoadingSpinner";

class CityTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: null,
            weekDay: null,
            day: null,
            month: null,
            year: null,
            timerID: null

        }

        this.days = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek,','Piątek','Sobota'];
        this.months = ['Stycznia', 'Lutego','Marca','Kwietnia','Maja','Czerwca','Lipca','Sierpnia','Września','Października', 'Listopada','Grudnia']
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.TimeByTimezone(),
            1000)
    }

    componentWillUnmount() {
        clearInterval(this.state.timerID);
    }

    TimeByTimezone() {
        const date = new Date();
        const utcOffset = date.getTimezoneOffset();
        const cityUtcOffset = this.props.time / 60
        date.setMinutes(date.getMinutes() + utcOffset);
        date.setMinutes(date.getMinutes() + cityUtcOffset);
        this.setState({
            date: date,
            weekDay: date.getDay(),
            day: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        })
    }

    render() {

        const {date, day, weekDay, month, year} = this.state

        return (
            <>
            {this.state.date != null? (
                <div className={'city-time'}>
                    <span id={'city-hour'}>
                        {date.toLocaleTimeString()}
                    </span>
                    <span id={'city-date'}>
                        {`${this.days[weekDay]} ${day} ${this.months[month]} ${year}`}
                    </span>
                </div>
                ) :
                <LoadingSpinner />}
            </>
        );
    }
}

export default CityTime;
