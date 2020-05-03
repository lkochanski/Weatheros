import React, {Component} from 'react';
import ReactAliceCarousel from "react-alice-carousel";
import "../../styles/HourlyForecast.scss"
import 'react-alice-carousel/lib/alice-carousel.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

import SpinnerItem from "./SpinnerItem";

export default class HourlySpinner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndex: 0,
            itemsInSlide: 8,
            responsive: {
                0: {
                    items: 3
                },
                574: {
                    items: 5
                },
                766: {
                    items: 6
                },
                990: {
                    items: 8
                },
                1198: {
                    items: 8
                }
            },
            spinnerItems: this.spinnerItems(),
            disabledRight: false,
            disabledLeft: true,
        }
    };

    spinnerItems() {
        return this.props.hourlyForecast.map((item, i) => <SpinnerItem key={i + 1} data={item}/>)
    }

    sliderPrevPage = () => {
        const currentIndex = this.state.currentIndex - this.state.itemsInSlide
        if(currentIndex <= 0){
            this.setState({
                currentIndex: 0,
                disabledLeft: true,
            })
        } else {
            this.setState({
                currentIndex,
                disabledRight: false,
            })
        }

    }

    sliderNextPage = () => {
        const {itemsInSlide, spinnerItems: {length}} = this.state
        let currentIndex = this.state.currentIndex + itemsInSlide
        // if (currentIndex >= length) currentIndex = length;
        if (currentIndex >= (length-itemsInSlide)) {
            this.setState({
                currentIndex: length - itemsInSlide,
                disabledRight: true,
                disabledLeft: false,
            })
        } else {
            this.setState({
                currentIndex,
                disabledRight: false,
                disabledLeft: false,
            })
        }



    }

    handleOnSlideChange = (event) => {
        const { itemsInSlide, item} = event
        this.setState({ itemsInSlide, currentIndex: item})
    }


    render() {
        const { currentIndex, spinnerItems, responsive } = this.state

        return (
            <div className={'hourly-spinner'}>
                {this.state.disabledLeft ?
                    <button onClick={this.sliderPrevPage} disabled><FontAwesomeIcon icon={faAngleLeft} /></button> :
                    <button onClick={this.sliderPrevPage}><FontAwesomeIcon icon={faAngleLeft} /></button>}

                <ReactAliceCarousel
                    items={spinnerItems}
                    slideToIndex={currentIndex}
                    responsive={responsive}
                    onInitialized={this.handleOnSlideChange}
                    onSlideChanged={this.handleOnSlideChange}
                    onResized={this.handleOnSlideChange}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    touchTrackingEnabled={true}
                    mouseTrackingEnabled={true}
                    mouseDragEnabled={true}
                    fadeOutAnimation={true}

                />
                {this.state.disabledRight ? <button onClick={this.sliderNextPage} disabled><FontAwesomeIcon icon={faAngleRight} /></button>
                    :
                    <button onClick={this.sliderNextPage}><FontAwesomeIcon icon={faAngleRight} /></button>
                }


            </div>
        );
    }
}


