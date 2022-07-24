import React, {useRef, useLayoutEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { gsap } from "gsap";
import Logo from "../images/Logo.svg"
import * as ROUTES from '../constants/routes';
import '../scss/main.scss';


export const Navbar = (props) => {
    const el = useRef();
    const q = gsap.utils.selector(el);

    useLayoutEffect (() => {   
        
        const animation1 = gsap.timeline();;
        animation1.fromTo(q(".nav"), {autoAlpha:0, x: -100},{stagger:0.3, duration: 0.5, autoAlpha:1, x: 0});
        animation1.fromTo(q(".navbar__button"), {autoAlpha:0, y: -20},{stagger:0.3, duration: 0.5, autoAlpha:1, y: 0});     

        return () => {
            animation1.kill();
          };
    
    
    },[]);

    return (
        <div className={`navbar ${props.className}`} ref={el}>
            <div className="navbar__items">
                <Link to={ROUTES.HOME} arial-label="Home">
                        <img src={Logo} alt="MacPaw" className="logo" />
                </Link>
                <h3 className="title">{"Hi intern!"}</h3>
                <p className="subtitle">{"Welcome to MI 2022 Front-end test"}</p>
                <p className="text">{"Lets start using The Cat API"}</p>
                <div className="navbar__conteiner">
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
                </div> 
            </div> 
        </div>
    )        
}
