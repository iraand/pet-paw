import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import MoonLoader from "react-spinners/ClipLoader";
import Select from 'react-select'

import * as ROUTES from '../constants/routes';

import fetchData  from "../utils/fetchData";
import { Header } from "../components/Header"
import { SelectBreeds } from "../components/SelectBreeds"
import { Slider } from "../components/Slider"
import Icons from '../images/icons.svg'


export default function BreedsSlider() {
    let location = useLocation();
    let navigate = useNavigate();

    const [breedsImages, setBreedsImages] = useState(null);
    const [uri, setUri] = useState('breeds');
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('Asc');
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(100);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const [shellDisableNext, setShellDisableNext] = useState(false);
    const [shellDisablePrev, setShellDisablePrev] = useState(true);
    const [slider, setSlider] = useState(false); 

    const limit_options = [
        { value: 5, label: 'Limit: 5' },
        { value: 10, label: 'Limit: 10' },
        { value: 15, label: 'Limit: 15' },
        { value: 20, label: 'Limit: 20' },

    ]
    useEffect(()=> {
        (() => {
            if (page === 1 && pages !== 1) {
                setShellDisablePrev(true);
                setShellDisableNext(false);
              } else if (page === pages && pages !== 1) {
                setShellDisableNext(true);
                setShellDisablePrev(false);
              } else if (pages === 1 || pages === 0) {
                setShellDisablePrev(true);
                setShellDisableNext(true);
              } else {
                setShellDisablePrev(false);
                setShellDisableNext(false);
              }
        })()
        console.log(location); 

        let pagination_count = 0;
        
        function getNumPages() {
            return Math.ceil(pagination_count / limit) | 0;
        }

        async function getImages(){
            let query_params = {
                limit: limit,
                order: order,
                page: page,
                uri: uri 
            }

            let response = await fetchData(query_params); 

            pagination_count = response.pagination_count;
            
            let images = [];

            if (uri === 'breeds'){
                const filteredData = response.response_data.filter(item => item.image && item.image.url); 
                images = filteredData.map((image) => ({
                    breed_id: image.id,
                    image_url: image.image.url,
                    image_name: image.name,
                    image_id: image.image.id
                }));
                setSlider(false);
                setBreedsImages(split(images));
            
                setPages(getNumPages);


            }else{
                images = response.response_data;
                setSlider(true);
                setBreedsImages(images); 
            }
         
            setLoading(false);

            setOpacity(1);                       
        }
        getImages();  

    }, [uri, page, limit, loading, shellDisableNext, shellDisablePrev])


    const handleChange = (e) => {
        setLoading(!loading);
        setOpacity(0.5);
        setPage(1);   

        let uri = '';
        if (e.value === "All breeds") {
            uri = 'breeds'
        }else{
            uri  = `images/search?breed_ids=${e.value}`;
        }

        setUri(uri);
    }

    function split(arr) {
        var size = 10; var arrayOfArrays = [];
        for (var i=0; i<arr.length; i+=size) {
             arrayOfArrays.push(arr.slice(i,i+size));
        }
        return arrayOfArrays;
        // const numParts = Math.ceil(arr.length / 10);
      
        // return Array
        //   .from({ length: numParts}, (n, i) => i * 10)
        //   .map((n, i, a) => arr.slice(n, a[i + 1]));
    };
    
    function styledImage(url) {
        
        return ({
            backgroundImage: `url('${url}')`,
            
        })
    };
  
    const prevPage = async (e) => {
        e.preventDefault();
        setLoading(!loading);
        setOpacity(0.5);
        if (page !== 1) {
            setPage(page-1);           
        }
    };

    const nextPage = async (e) => {
        e.preventDefault();
        setLoading(!loading);
        setOpacity(0.5);
        if (page !== pages) {
            setPage(page+1);
        } 
                      
    };
    
    return (
        <>           
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <button type="button" aria-label="Back" className="button button--back" onClick={() => navigate(-1)}>
                        <svg className="arrow arrow--back" viewBox="0 0 12 20">
                            <use width="12" height="20" href={`${Icons}#arrow-left-big`}></use>
                        </svg>
                    </button>                     
                    <h1 className="title-page">BREEDS</h1>

                    {(()=>{
                        if(!slider && breedsImages) {
                            return (<>
                            <SelectBreeds onChange={handleChange} className="breeds-select react-select__control--leftMargin"/>   
                            <Select 
                                defaultValue={limit_options[1]}
                                options={limit_options}
                                onChange={e => setLimit(e.value)} 
                                classNamePrefix = 'react-select' 
                                className='select-limit react-select__control--left-margin'
                            />
                            <button type="button" aria-label="sort" className="button button--sort">
                                <svg className="icon-sort" viewBox="0 0 19 22">
                                    <use width="19" height="22" href={`${Icons}#sortAB`}></use>
                                </svg>
                            </button> 
                            <button type="button" aria-label="sort" className="button button--sort">
                                <svg className="icon-sort" viewBox="0 0 19 22">
                                    <use width="19" height="22" href={`${Icons}#sortBA`}></use>
                                </svg>
                            </button></>) 
                        }     
                      
                    })()}
                   
                </div> 

                {(() => {
                    
                    if(!slider && breedsImages) {
                        const numContainers = breedsImages.length;
                        
                        let container = [];

                        for(let i=0; i<numContainers; i++){
                            container.push(<div key={page+i} className="images__container" style={{opacity: opacity}}>
                                
                                {breedsImages[i].map((image, index) => {
                                    return (<>
                                        <div className={`img${index+1} breeds__image`}
                                            key={image.image_id}
                                            style={styledImage(image.image_url)}                                           
                                        >
                                            <div className="breeds__tiltle" key={image.image_name}>
                                                {image.breed_id &&
                                                    <button className="button button__tiltle"
                                                        onClick={()=>{handleChange({value: image.breed_id})
                                                        }}
                                                    >
                                                        {image.image_name}
                                                    </button>}
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
                                <button type="button" aria-label="Next page"  onClick={nextPage} disabled={shellDisableNext} className="button button--next">
                                    NEXT
                                    <svg className="arrow arrow--right" viewBox="0 0 7 12">
                                        <use width="7" height="12" href={`${Icons}#arrow-left`}></use>
                                    </svg>     
                                </button> 
                            </div>
                        </>;
                    } 

                    if(slider) { navigate("/breed") }
                        // <Navigate to={ROUTES.BREED} replace={true} />    
                        if(slider) {  <Slider images={breedsImages} />}

                })()}
                <MoonLoader speedMultiplier={1} color={"#FF868E"} loading={loading} size={150} className="loader"/>          
            </div>
        </div>         
        </>
    )
}