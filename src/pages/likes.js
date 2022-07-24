import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/ClipLoader";
import { getLikes, removeVotes } from "../utils/fetchVotesFavourites";
import split  from "../utils/split";

import { Header } from "../components/Header";
import { ButtonGoBack } from "../components/ButtonGoBack";
import Icons from '../images/icons.svg'

export default function Likes() {

    document.title = 'PatsPaw - Likes';
    const [breedsImages, setBreedsImages] = useState(null);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1); 
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0); 
    const [shellDisableNext, setShellDisableNext] = useState(false);
    const [shellDisablePrev, setShellDisablePrev] = useState(true);  
    const [remove, setRemove] = useState(false); 
    const [showMasage, getShowMasage] = useState(true);      
    let isCancelled = false;
    
    useEffect(()=> {    
        
        async function getImages(){
            
            const response = await getLikes(page, 1);         

            let pagination_count = response.pagination_count;

            function getNumPages() {
                return Math.ceil(pagination_count / 30);
            }

            if (response && response.response_data.length > 0){
                const images = response.response_data.map((image) => ({
                    id: image.id,
                    image_url: image.image_url,
                    image_id: image.image_id,
                    created_at: image.created_at
                }));

                setBreedsImages(split(images));
                setLoading(false);
                setOpacity(1);
                setPages(getNumPages);
                getShowMasage(false);  
                setShellDisableNext(page === pages || response.response_data.length < 10); 
                setShellDisablePrev(page === 1);                 
            }else{
                getShowMasage(true);
                setLoading(false);
                setBreedsImages(null);
            }
        }

        if (!isCancelled) {
            getImages(); 
        }

        return () => {
            isCancelled = true;
            setRemove(false);
        };
          
    }, [page, remove])

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

    const removeImage = async (image_id) => {
        await removeVotes(image_id);  
        setRemove(true);
        setLoading(true);
    } 

    return (        
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <ButtonGoBack navigate={-1} />                     
                    <h1 className="title-page">LIKES</h1>
                </div> 

                {(() => {
                    
                    if(breedsImages) {

                        const numContainers = breedsImages.length;
                        
                        let container = [];

                        for(let i=0; i<numContainers; i++){
                            container.push(<div key={i} className="images__container" style={{opacity: opacity}}>
                                
                                {breedsImages[i].map((image, index) => {
                                    return (
                                        <div className={`img${index+1} breeds__image`}
                                            key={image.image_id}
                                            style={{backgroundImage: `url('${image.image_url}')`}}
                                        >
                                            <div className="breeds__tiltle" key={image.image_id}>
                                                <button className="button button__delete" onClick={() => removeImage(image.id)}>
                                                    <svg className="icon-delete" viewBox="0 0 10 10">
                                                        <use width="10" height="10" href={`${Icons}#close`}></use>
                                                    </svg>
                                                </button>
                                            </div> 
                                        </div> 
                                    )
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
                {showMasage && <div className="vote-conteiner top-margin-40">No item found</div>}
                {loading && <CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader"/>}
            </div>
        </div>         
    )
}