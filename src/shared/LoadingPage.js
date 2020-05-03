import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import '../styles/LoadingPage.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSadTear} from "@fortawesome/free-solid-svg-icons/faSadTear";

const override =
    'display: block; ' +
    'margin: 0 auto; ' +
    'border-color: red;';

const LoadingPage = (props) => {
    if (props.error != null) {
        return (
            <div className={'error-message-big'}>
                <FontAwesomeIcon icon={faSadTear} className={'error-icon'}/>
                <span>Coś poszło nie tak. Spróbuj jeszcze raz.</span>
            </div>
        )
    } else if (props.loading) {
        return (
            <div className={'loading-spinner'}>
                <MoonLoader css={override}
                            size={100}
                            color={'#DA0033'}
                            loading={props.loading}/>
            </div>
        );
    } else {
        return null;
    }
};

export default LoadingPage;
