import React from "react";
import Select from 'react-select'

export function Order(props) {

    const options = [
        { value: 'Rand', label: 'Random' },
        { value: 'Desc', label: 'Desc' },
        { value: 'Asc', label: 'Asc' }

    ];

    return (
        <>
        <Select 
            defaultValue={options[0]}
            options={options}
            onChange={e => {props.onChange(e.value)}} 
            classNamePrefix = 'react-select' 
            className={props.className}
        />
        </>
    )
}