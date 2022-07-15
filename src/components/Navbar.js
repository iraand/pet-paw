import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from "../images/Logo.svg"
import * as ROUTES from '../constants/routes';
import '../scss/main.scss';

export const Navbar = () => {
    
    return (
       <div className="navbar">
           <Link to={ROUTES.HOME} arial-label="Home">
                <img src={Logo} alt="MacPaw" className="logo" />
           </Link>
           <h3 className="title">{"Hi intern!"}</h3>
           <p className="subtitle">{"Welcome to MI 2022 Front-end test"}</p>
           <p className="text">{"Lets start using The Cat API"}</p>
           <div className="navbar__conteiner">
           <NavLink to={ROUTES.VOTING} arial-label="VOTING">
               <div className="navbar__item">
                   <div className="navbar__icon vote-table"></div>
                   <div className="navbar__button">{"VOTING"}</div>
               </div>
            </NavLink>
            <NavLink to={ROUTES.BREEDS} arial-label="BREEDS">
               <div className="navbar__item">
               <div className="navbar__icon pet-breeds"></div>
                   <div className="navbar__button">{"BREEDS"}</div>
               </div>
            </NavLink>
            <NavLink to={ROUTES.GALLERY} arial-label="GALLERY">    
               <div className="navbar__item">
                   <div className="navbar__icon images-search"></div>
                   <button className="navbar__button">{"GALLERY"}</button>                  
               </div>
            </NavLink>   
           </div> 
       </div> 
    )        
}
