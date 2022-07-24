import React, { useState, useEffect } from "react";

import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import { useParams } from 'react-router-dom';
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { ButtonGoBack } from "../components/ButtonGoBack";

export default function Breed() {
    let { id } = useParams();

    document.title = `PatsPaw - Breeds - ${id}`;
    const [breedsImages, setBreedsImages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);
  
    let isCancelled = false;

    useEffect(()=> {

        async function getImages(){
            let query_params = {
                limit: 10,               
                page: 1,
                order: 'Desc',
                uri: `images/search?breed_ids=${id}`               
            };

            let response = await fetchData(query_params);                        
                  
            let images = response.response_data;

            setBreedsImages(images);    
            setLoading(false);
            setOpacity(1);

        }
        if (!isCancelled) {
            getImages();
        }
        return () => {
            isCancelled = true;
          };

    }, [])
                                                  
    return (    
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <ButtonGoBack navigate={-1} />                     
                    <h1 className="title-page title-page__notactive">BREEDS</h1>
                </div> 
                
                {(() => {
                    
                    if(breedsImages) {    
                        return <>
                            <Slider images={breedsImages} />
                        </>;
                    } 
                })()}
                {loading && <CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader"/>}
            </div>
        </div>         
    )
} 