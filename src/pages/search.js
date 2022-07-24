import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import split  from "../utils/split";

import { Header } from "../components/Header";
import { ButtonGoBack } from "../components/ButtonGoBack";
import Icons from '../images/icons.svg'

export default function Search() {

    let { id } = useParams();

    document.title = `PatsPaw - ${id}`;
    const [breedsImages, setBreedsImages] = useState(null);
    const [searchName, setSearchName] = useState('');
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1); 
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0); 
    const [shellDisableNext, setShellDisableNext] = useState(false);
    const [shellDisablePrev, setShellDisablePrev] = useState(true);        
    let isCancelled = false;
    
    useEffect(()=> {    
      
        async function getImages(){
            let query_params = {
                limit: 10,               
                page: page,
                order: 'Asc',
                uri: `images/search?breed_ids=${id}`             
            };

            let pagination_count = 0;
            
            const response = await fetchData(query_params);            
                  
            pagination_count = response.pagination_count;

            function getNumPages() {
                return Math.ceil(pagination_count / 10);
            }

            if (response && response.response_data && response.response_data[0]){
                const images = response.response_data.map((image) => ({
                    image_url: image.url,
                    image_id: image.id
                }));
    
                setSearchName(`${response.response_data[0].breeds[0].name}`);
                setBreedsImages(split(images));
                setLoading(false);
                setOpacity(1);
                setPages(getNumPages);
                  
                setShellDisableNext(page === pages || pagination_count<10); 
                setShellDisablePrev(page === 1); 
            } else {
                setSearchName('No images found!')
            }


        }

        if (!isCancelled) {
            getImages();
        }

        return () => {
            isCancelled = true;
          };

    }, [page, id])

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
                    <h1 className="title-page">SEARCH</h1>
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
                                                <button className="button button__love"  >
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
                            {breedsImages && <p className="search">Search results for: <span>{searchName}</span></p>}
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