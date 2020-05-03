import React from 'react';

const ErrorDisplay = (props) => {
        return (
            <div>
                <span className={'error-message'}>{props.message}</span>
            </div>
        );
};

export default ErrorDisplay;
