import React from "react";
import { useNavigate } from "react-router-dom";
import Icons from '../images/icons.svg'

export function ButtonGoBack(props) {
    const navigate = useNavigate();

    return (
        <button type="button" aria-label="Back" className="button button-back" onClick={() => navigate(props.navigate)}>
            <svg className="arrow arrow-back" viewBox="0 0 12 20">
                <use width="12" height="20" href={`${Icons}#arrow-left-big`}></use>
            </svg>
        </button>  

    )
}    