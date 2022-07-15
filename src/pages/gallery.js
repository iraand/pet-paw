import React, { useState, useEffect } from "react";

import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import {favouriteImage}  from "../utils/favouriteImage";
import split  from "../utils/split";

import { Header } from "../components/Header";
import { SelectBreeds } from "../components/SelectBreeds";
import { ButtonGoBack } from "../components/ButtonGoBack";
import { Limit } from "../components/Limit";
import { Order } from "../components/Order";
import { Type } from "../components/Type";

import Icons from '../images/icons.svg'

export default function Gallery() {
    const [breedsImages, setBreedsImages] = useState(null);
    const [uri, setUri] = useState('images/search');
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('Rand');
    const [type, setType] = useState(null);
    const [value, setValue] = useState(null);
    const [page, setPage] = useState(100);
    const [pages, setPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const [shellDisableNext, setShellDisableNext] = useState(false);
    const [shellDisablePrev, setShellDisablePrev] = useState(true);    
    let isCancelled = false;
    document.title = 'PatsPaw - Gallery';
    
    useEffect(()=> {    
      
        async function getImages(){
            let query_params = {
                limit: limit,               
                page: page,
                order: order,
                mime_types: type,
                uri: uri               
            };
            let response;
            let pagination_count = 0;
            
            response = await fetchData(query_params);            
                  
            pagination_count = response.pagination_count;

            function getNumPages() {
                return Math.ceil(pagination_count / limit);
            }

            let images = [];

            if (uri === 'breeds'){
                const filteredData = response.response_data.filter(item => item.image && item.image.url); 
                images = filteredData.map((image) => ({
                    breed_id: image.id,
                    image_url: image.image.url,
                    image_name: image.name,
                    image_id: image.image.id
                }));

            }else{
                images = response.response_data.map((image) => ({
                    image_url: image.url,
                    image_id: image.id
                }));
            }

            setBreedsImages(split(images));
            setLoading(false);
            setOpacity(1);
            setPages(getNumPages());  

            if (images.length < 5 || page === pages){
                setShellDisableNext(true);
            } else {
                setShellDisableNext(false);
            }
 
            setShellDisablePrev(page === 1); 
    
            console.log(images);
            console.log(page, pages);

        }
        if (!isCancelled) {
            getImages();
        }

        return () => {
            isCancelled = true;
          };

    }, [uri, page, type, limit, order])


    const handleChange = (e) => {
        setLoading(true);
        setOpacity(0.5);
        if (e) {           
            setPage(1);   
            setValue(e);
            setType('gif,jpg,png');

            let uri = '';
            if (e.value === "All breeds") {
                uri = 'breeds'
            }else{
                uri  = `images/search?breed_ids=${e.value}`;
            }
    
            setUri(uri);
        }
    }

    const handleChangeType = (val) => {
        setPage(1);               
        setValue(null);
        setLoading(true);
        setOpacity(0.5);
        if (val){
            setType(val);
            const uri  = `images/search?mime_types=${val}`;
            setUri(uri);        
        }    
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
        <>           
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <ButtonGoBack navigate={-1} />                     
                    <h1 className="title-page">GALLERY</h1>
                    <div className="wrapper">
                        <button type="button" aria-label="upload" className="button button-upload">
                            <svg className="icon-upload" viewBox="0 0 16 16">
                                <use width="16" height="16" href={`${Icons}#upload`}></use>
                            </svg>
                            UPLOAD
                        </button>
                    </div>
                </div> 
                <div className="gallery__select-section">
                    <span className="label">ORDER</span>
                    <span className="label">TYPE</span>
                    <Order onChange={val => {
                        setLoading(true);
                        setOpacity(0.5);
                        setOrder(val)}}
                        className="select-order"
                    />                      
                    <Type onChange={handleChangeType} className="select-order"/> 
                    <span className="label">BREED</span>                      
                    <span className="label">LIMIT</span>
                    <SelectBreeds onChange={handleChange} placeholder={'None'} defaultValue={null} value={value} className="gallery__breeds-select"/>  
                    <div className="wrapper">
                        <Limit onChange={val => setLimit(val)} className="gallery__limit"/>  
                        <button type="button"
                            className="button button-reload"
                            onClick={nextPage}
                            disabled={shellDisableNext} 
                        >
                            <svg className="icon-reload" viewBox="0 0 18 20">
                                <use width="18" height="20" href={`${Icons}#reload`}></use>
                            </svg>                      
                        </button>
                    </div>                  
                </div>

                {(() => {
                    
                    if(breedsImages) {

                        const numContainers = breedsImages.length;
                        
                        let container = [];

                        for(let i=0; i<numContainers; i++){
                            container.push(<div key={page+i} className="images__container" style={{opacity: opacity}}>
                                
                                {breedsImages[i].map((image, index) => {
                                    return (<>
                                        <div className={`img${index+1} breeds__image`}
                                            key={image.image_id}
                                            style={{backgroundImage: `url('${image.image_url}')`}}
                                        >
                                            <div className="breeds__tiltle" key={image.image_name}>
                                                <button className="button button__love"  onClick={() => {favouriteImage(image.image_id)}}>
                                                    <svg className="icon-love" viewBox="0 0 20 17">
                                                        <use width="20" height="17" href={`${Icons}#smile-love`}></use>
                                                    </svg>
                                                </button>
                                            </div> 
                                        </div> 
                                    </>)
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
        </>
    )
} 