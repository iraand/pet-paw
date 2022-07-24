import React, { useState, useEffect } from "react";
import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import { vote, getFavourites, getVotes, getLikes, favouritesLikesDislikes } from "../utils/fetchVotesFavourites";
import { Header } from "../components/Header";
import Icons from '../images/icons.svg'
import { ButtonGoBack } from "../components/ButtonGoBack";

export default function Voting() {
    let sub_id = '053221978'; 
    document.title = `PetsPaw - Voting`;
    const [image, setImage] = useState(null);
    const [updatedImage, setUpdatedImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [votesData, setVotesData] = useState([]); 

    let isCancelled = false;

    const icons = [
        <svg className="vote-icon vote-icon-like" viewBox="0 0 20 20">
            <use width="20" height="20" href={`${Icons}#smile-like`}></use>
        </svg>,
        <svg className="vote-icon vote-icon-love" viewBox="0 0 20 20">
            <use width="20" height="20" href={`${Icons}#smile-love`}></use>
        </svg>,
        <svg className="vote-icon vote-icon-dislike" viewBox="0 0 20 20">
            <use width="20" height="20" href={`${Icons}#smile-dislike`}></use>
        </svg>
    ];

    useEffect(()=> {

        async function getImage(){
            let query_params = {
                limit: 1,               
                page: 1,
                order: 'Rand',
                uri: `images/search`               
            };

            let response = await fetchData(query_params);                        

            setImage(response.response_data[0]);    
            setLoading(false);

            const votes = await favouritesLikesDislikes();
            
            setVotesData(votes);
        }

        if (!isCancelled) {
            getImage();    
        }
        return () => {
            isCancelled = true;
          };

    }, [updatedImage])

    async function castVote(val) {
        setLoading(true);

        const image_id = image.id;
        
        const response = await vote({val, image_id, sub_id});
       
        setUpdatedImage(response);
    };

    return (
        <>           
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <ButtonGoBack navigate={-1} />                     
                    <h1 className="title-page">VOTING</h1>
                </div> 
                
                {(() => {
                    
                    if(image) {    
                        return <>
                            <div className="image_container">
                                <img src={image.url} alt={image.id} className="image" />
                            </div> 
                            <div className="icons-container">
                                <button className='voting-button' onClick={() => {castVote(1)}}>
                                    <svg className="smile-like" viewBox="0 0 30 30">
                                        <use width="30" height="30" href={`${Icons}#smile-like`}></use>
                                    </svg>
                                </button>
                                <button className='voting-button' onClick={() => {castVote("favourites")}}>
                                    <svg className="smile-love" viewBox="0 0 30 26">
                                        <use width="30" height="26" href={`${Icons}#smile-love`}></use>
                                    </svg>
                                </button>
                                <button className='voting-button' onClick={() => {castVote(0)}}>
                                    <svg className="smile-dislike" viewBox="0 0 30 30">
                                        <use width="30" height="30" href={`${Icons}#smile-dislike`}></use>
                                    </svg>
                                </button>
                            </div> 
                            {votesData  && <div>                              
                                 {votesData.map((vote, i)=> {
                                    return <div className="vote-conteiner" key={i}>
                                        <p className="vote_time">{vote.created_at}</p>
                                        <p>Image ID: <span className="vote_id">{vote.image_id}</span>
                                            {vote.value === 1 ?  " was added to Like" : vote.value === 0 ? " was added to Dislike": vote.value === -1 ? " was removed from Favourites" : " was added to Favourites"}</p>
                                        {vote.value === 1 ?  icons[0] : vote.value === 0 ? icons[2] : vote.value === -1 ?  null : icons[1] }                  
                                    </div>
                                })}
                            </div> } 
                        </>;
                    } 
                })()}
                {loading && <CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader loader-voqating"/>}
            </div>
        </div>         
        </>
    )
} 