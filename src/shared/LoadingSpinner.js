import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

const LoadingSpinner = () => {

    const override =
        'display: block; ' +
        'margin: 0 auto; ' +
        'border-color: red;';

    return (
            <MoonLoader css={override}
                        size={30}
                        color={'#DA0033'}
                        loading={true}/>
    );
};

export default LoadingSpinner;
