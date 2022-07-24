import React, { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';
import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import split  from "../utils/split";

import { Header } from "../components/Header";
import { SelectBreeds } from "../components/SelectBreeds";
import { ButtonGoBack } from "../components/ButtonGoBack";
import { Limit } from "../components/Limit";

import Icons from '../images/icons.svg'

export default function Breeds() {
    let navigate = useNavigate();

    document.title = 'PatsPaw - Breeds';
    const [breedsImages, setBreedsImages] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const [shellDisableNext, setShellDisableNext] = useState(false);
    const [shellDisablePrev, setShellDisablePrev] = useState(true);  
    const [order, setOrder] = useState('Asc');     
    let isCancelled = false;

    useEffect(()=> {
        
        async function getImages(){
            let query_params = {
                limit: limit,               
                page: page,
                order: order,
                uri: 'breeds'              
            };
            let response;
            let pagination_count = 0;
            
            response = await fetchData(query_params);                        
                  
            pagination_count = response.pagination_count;

            function getNumPages() {
                return Math.ceil(pagination_count / limit);
            }

            const filteredData = response.response_data.filter(item => item.image && item.image.url); 
            let images = filteredData.map((image) => ({
                breed_id: image.id,
                image_url: image.image.url,
                image_name: image.name,
                image_id: image.image.id
            }));

            setBreedsImages(split(images));
            setLoading(false);
            setOpacity(1);
            setPages(getNumPages);  
            setShellDisableNext(page === pages || pagination_count < limit); 
            setShellDisablePrev(page === 1); 
         
        }

        if (!isCancelled) {
            getImages();
        }
        return () => {
            isCancelled = true;
        };

    }, [page, limit, order])


    const handleChange = (e) => {
        setLoading(true);
        setOpacity(0.5);
        navigate(`/breeds/${e.value}`);         
    }

    const prevPage = async (e) => {
        setLoading(true);
        setOpacity(0.5);
        e.preventDefault();               
        if(page !== 1){
            setPage(page-1);      
        }
    };

    const nextPage = async (e) => {
        setLoading(true);
        setOpacity(0.5);
        if(page !== pages){
            setPage(page+1);
        }                    
    };
                                                   
    return (          
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section"> 
                    <ButtonGoBack navigate={-1} />                     
                    <h1 className="title-page">BREEDS</h1>
                    <div className="wrapper">
                        <SelectBreeds
                            onChange={handleChange}
                            defaultValue={[{ value: 'All breeds', label: 'All breeds' }]}
                            className="breeds__breeds-select"
                        />                   
                        <Limit onChange={val => setLimit(val)} className="breeds__limit"/>
                        <button type="button" aria-label="sort" className="button button-sort" onClick={() => {setOrder('Asc')}}>
                            <svg className="icon-sort" viewBox="0 0 19 22">
                                <use width="19" height="22" href={`${Icons}#sortAB`}></use>
                            </svg>
                        </button> 
                        <button type="button" aria-label="sort" className="button button-sort" onClick={() => {setOrder('Desc')}}>
                            <svg className="icon-sort" viewBox="0 0 19 22">
                                <use width="19" height="22" href={`${Icons}#sortBA`}></use>
                                </svg>
                        </button>
                    </div>
                </div> 
                
                {(() => {
                    
                    if(breedsImages) {
                        
                        const numContainers = breedsImages.length;
                        
                        let container = [];

                        for(let i=0; i<numContainers; i++){
                            container.push(<div key={i} className="images__container" style={{opacity: opacity}}>
                                
                                {breedsImages[i].map((image, index) => {

                                    if (image) {
                                        return (
                                            <div className={`img${index+1} breeds__image`}
                                                key={image.image_id}
                                                style={{backgroundImage: `url('${image.image_url}')`}}
                                            >
                                                <div className="breeds__tiltle">
                                                    {image.breed_id && <button className="button button__tiltle"
                                                        onClick={()=>{handleChange({value: image.breed_id})
                                                        }}
                                                    >
                                                        {image.image_name}
                                                    </button>}
                                                </div> 
                                            </div> 
                                        )
                                    }
                                })}
                            </div>)
                        }      
                        return <>
                            {container}
                            <div className="button-group">
                                <button type="button" aria-label="Prev page" onClick={prevPage} disabled={shellDisablePrev} className="button button--prev">
                                    <svg className="arrow arrow--left" viewBox="0 0 7 12">
                                        <use width="7" height="12" href={`${Icons}#arrow-left`}></use>
                                    </svg>
                                    PREV
                                </button> 
                                <button type="button" aria-label="Next page" onClick={nextPage} disabled={shellDisableNext} className="button button--next">
                                    NEXT
                                    <svg className="arrow arrow--right" viewBox="0 0 7 12">
                                        <use width="7" height="12" href={`${Icons}#arrow-left`}></use>
                                    </svg>     
                                </button> 
                            </div>
                        </>;
                    } 
                })()}
                {loading && <CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader"/>}
            </div>
        </div>         
    )
} 