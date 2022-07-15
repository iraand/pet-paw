import React, {useState, useEffect} from 'react';
import axios from "axios";
import AsyncSelect from 'react-select/async';

import {getFavourites}  from "../utils/favouriteImage";

import Icons from '../images/icons.svg'

export const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const [breedsOptions, setBreedsOptions] = useState([]);
    const [images, setImages] = useState([]);

    const handleChange = (e) => {      
        setInputValue(e);
    }

    const loadOptions = () => {
        return new Promise(resolve =>
            setTimeout(() => { 
                resolve(breedsOptions) },1000)
        );
      }


    const handleSubmit = (event) => {
        event.preventDefault();  
    } 
      

    useEffect(()=> {

        async function getOptions(){
            axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4"   
            let response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${inputValue}`) 
            // setImages(response.data)
            setBreedsOptions(response.data.map((item) => ({value:item.id, label:item.name })));           
        }

        if(inputValue && inputValue.length > 1) {getOptions()};

    },[inputValue])

    return(
        <div className='header'>
            <form onSubmit={handleSubmit}>
                <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={handleChange}
                    placeholder={'Search for breeds by name'}
                    onChange={handleChange}
                    classNamePrefix = 'react-select' 
                    className='search-breeds'
                />
                <button className='search-button'>
                    <svg className="search-icon" viewBox="0 0 20 20">
                        <use width="20" height="20" href={`${Icons}#find`}></use>
                    </svg>
                </button>
            </form>
            <div className='smiles'>
                <button className='smile-button'>
                    <svg className="smile-like" viewBox="0 0 30 30">
                        <use width="30" height="30" href={`${Icons}#smile-like`}></use>
                    </svg>
                </button>
                <button className='smile-button'>
                    <svg className="smile-love" viewBox="0 0 30 26">
                        <use width="30" height="26" href={`${Icons}#smile-love`}></use>
                    </svg>
                </button>
                <button className='smile-button'>
                    <svg className="smile-dislike" viewBox="0 0 30 30">
                        <use width="30" height="30" href={`${Icons}#smile-dislike`}></use>
                    </svg>
                </button>
            </div>
            {images.map((image, i) => {
                return <img key={i} src={image.url} alt={image.name}/>
            })}
        
        </div>
    )

    
    
 

}
