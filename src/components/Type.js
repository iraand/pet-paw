import React from "react";
import Select from 'react-select'

export function Type(props) {

    const options = [
        { value: 'gif,jpg,png', label: 'All' },
        { value: 'jpg,png', label: 'Static' },
        { value: 'gif', label: 'Animated' }

    ];

    return (
        <>
        <Select 
            defaultValue={options[0]}
            options={options}
            onChange={e => props.onChange(e.value)} 
            classNamePrefix = 'react-select' 
            className={props.className}
        />
        </>
    )
}