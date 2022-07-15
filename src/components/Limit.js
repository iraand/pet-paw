import React from "react";
import Select from 'react-select'

export function Limit(props) {

    const options = [
        { value: 5, label: 'Limit: 5' },
        { value: 10, label: 'Limit: 10' },
        { value: 15, label: 'Limit: 15' },
        { value: 20, label: 'Limit: 20' },

    ];

    return (
        <Select 
            defaultValue={options[1]}
            options={options}
            onChange={e => props.onChange(e.value)} 
            classNamePrefix = 'react-select' 
            className={props.className}
        />
    )
}