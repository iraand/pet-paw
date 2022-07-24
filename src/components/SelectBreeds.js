import React, {useState, useEffect} from 'react';
import Select from 'react-select'; 

// import axios from "axios";

export const SelectBreeds = (props) => {   
    const [breedsOptions, setBreedsOptions] = useState([{ value: 'All breeds', label: 'All breeds' }]);
    
    const handleChange = (e) => {
        return props.onChange(e);
    }
    useEffect(() => {
        async function getOptions(){
            // axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4"   
            // let response = await axios.get('https://api.thecatapi.com/v1/breeds') 
            const savedBreeds = await JSON.parse(localStorage.getItem('breeds'));
            
            const options = savedBreeds.map( item => ({ value: item.id, label: item.name }));
            setBreedsOptions( (breedsOptions) => [...breedsOptions, ...options]); 
        }
               
        getOptions();

    },[])

    return <Select
            value={props.value}
            defaultValue={props.defaultValue || breedsOptions[0]}
            options={breedsOptions}
            onChange={handleChange} 
            classNamePrefix = 'react-select'  
            className={props.className}
            placeholder={props.placeholder}
            />
}
