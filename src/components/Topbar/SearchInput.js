import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


const SearchInput = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={'form-wrapper'}>
            <input type="text"
                   placeholder={"Znajdź miasto"}
                   onChange={props.handleChange}
                   value={props.value}
                   className={props.error != null ? 'input-error' : null}/>

            <button type={'submit'}><FontAwesomeIcon icon={faSearch}/></button>
        </form>
    );
};

export default SearchInput;
