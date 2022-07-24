import React, {useState, useEffect} from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import axios from "axios";
import AsyncSelect from 'react-select/async';
import Icons from '../images/icons.svg'
import { HamburgerMenu } from '../components/HamburgerMenu.js';
import * as ROUTES from '../constants/routes';

export const Header = () => {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState('');
    const [breedsOptions, setBreedsOptions] = useState([]);
    const [showModal, setShowModal] = useState(false); 
    let navigate = useNavigate();

    const handleChange = (e) => {  
        setValue(e.value);         
        navigate(`/search/${e.value}`);         
    }

    const onInputChange = (e) =>{
        setInputValue(e);        
    }

    const loadOptions = () => {
        return new Promise(resolve =>
            setTimeout(() => { 
               resolve(breedsOptions);           
            },1000)
        );
      }


    const handleSubmit = (e) => {
        e.preventDefault();     
    } 
      

    useEffect(()=> {

        async function getOptions(){
            
            axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4"   
            let response = await axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${inputValue}`) 
          
            setBreedsOptions(response.data.map((item) => ({value:item.id, label:item.name })));
                     
        }

        if(inputValue && inputValue.length > 1) {getOptions()};

    },[inputValue])

    return(<>
        <div className='header'>
            <form onSubmit={handleSubmit}>
                <AsyncSelect
                    value={value}
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    onInputChange={onInputChange}
                    placeholder={'Search for breeds by name'}
                    onChange={handleChange}
                    classNamePrefix = 'react-select' 
                    className='search-breeds'
                />
                <button className='search-button' >
                    <svg className="search-icon" viewBox="0 0 20 20">
                        <use width="20" height="20" href={`${Icons}#find`}></use>
                    </svg>
                </button>
            </form>
            <div className='smiles'>
                <div to={'/'} className="menu-burger">
                    <button className='smile-button' onClick={() => setShowModal(true)}>
                        <svg className="burger" viewBox="0 0 30 18">
                            <use width="30" height="18" href={`${Icons}#burger`}></use>
                        </svg>
                    </button>
                </div>
                <NavLink to={'/likes'} arial-label="VOTING">
                    <button className='smile-button' >
                        <svg className="smile-like" viewBox="0 0 30 30">
                            <use width="30" height="30" href={`${Icons}#smile-like`}></use>
                        </svg>
                    </button>
                </NavLink>
                <NavLink to={'/favourites'} arial-label="VOTING">
                    <button className='smile-button' >
                        <svg className="smile-love" viewBox="0 0 30 26">
                            <use width="30" height="26" href={`${Icons}#smile-love`}></use>
                        </svg>
                    </button>
                </NavLink>
                <NavLink to={'/dislikes'} arial-label="VOTING">
                    <button className='smile-button'>
                        <svg className="smile-dislike" viewBox="0 0 30 30">
                            <use width="30" height="30" href={`${Icons}#smile-dislike`}></use>
                        </svg>
                    </button>
                </NavLink>
            </div>        
        </div>
        <HamburgerMenu show={showModal} handleClose={ () => setShowModal(false) } >
            <NavLink to={ROUTES.VOTING} arial-label="VOTING" className="navbar__item">
                <div className="nav nav1"></div>
                <div className="navbar__button">{"VOTING"}</div>
            </NavLink>
            <NavLink to={ROUTES.BREEDS} arial-label="BREEDS" className="navbar__item">
                <div className="nav nav2"></div>
                <div className="navbar__button">{"BREEDS"}</div>
            </NavLink>
            <NavLink to={ROUTES.GALLERY} arial-label="GALLERY" className="navbar__item">    
                <div className="nav nav3"></div>
                <div className="navbar__button">{"GALLERY"}</div>                  
            </NavLink> 
        </HamburgerMenu>
    </>
    )
}
