import React, { useState, useEffect } from "react";
import axios from "axios";
import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import { Header } from "../components/Header";
import Icons from '../images/icons.svg'
import { ButtonGoBack } from "../components/ButtonGoBack";

export default function Voting() {
    let sub_id = '053221978'; 
    document.title = `PetsPaw - Voting`;
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [votesDate, setVotesDate] = useState([]); 


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
        }

        if (!isCancelled) {
            getImage();     
        }
        return () => {
            isCancelled = true;
          };

    }, [votesDate])

    async function vote(val) {
        setLoading(true);
        let response = null;

        if(val==="favourites"){
            let body = {
                image_id: image.id,
                sub_id: sub_id
            }
            response = await axios.post('https://api.thecatapi.com/v1/favourites', body ) 
            
            getFavourites();

        }else{
            let body = {
                image_id: image.id,
                sub_id: sub_id,
                value: val
            }
            response = await axios.post('https://api.thecatapi.com/v1/votes', body );

            getVotes();
        }
    };

    async function getVotes()
    {
      axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4" ;
      let response = await axios.get('https://api.thecatapi.com/v1/votes', { params: { order:"DESC", limit:1 } } ) // Get the last 25 votes
      
      response.data.forEach(element => {
        element.created_at = new Date(element.created_at).toJSON().slice(11,16);
      });
      
      
      setVotesDate((prev => [...prev, ...response.data]));  
      
  }

  async function getFavourites() {         
      let query_params = {
          limit: 1,
          order: 'DESC',
          page:  1,
      }
      axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4" ;
      let response = await axios.get('https://api.thecatapi.com/v1/favourites', { params: query_params } ) 
      
      response.data.forEach(element => {
          element.created_at = new Date(element.created_at).toJSON().slice(11,16);
        });
      
        setVotesDate((prev => [...prev, ...response.data]));  
     
  };

    return (
        <>           
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <ButtonGoBack navigate={"/breeds/"} />                     
                    <h1 className="title-page">VOTING</h1>
                </div> 
                
                {(() => {
                    
                    if(image) {    
                        return <>
                            <div className="image_container">
                                <img src={image.url} alt={image.id} className="image" />
                            </div> 
                            <div className="icons-container">
                                <button className='voting-button' onClick={() => {vote(1)}}>
                                    <svg className="smile-like" viewBox="0 0 30 30">
                                        <use width="30" height="30" href={`${Icons}#smile-like`}></use>
                                    </svg>
                                </button>
                                <button className='voting-button' onClick={() => {vote("favourites")}}>
                                    <svg className="smile-love" viewBox="0 0 30 26">
                                        <use width="30" height="26" href={`${Icons}#smile-love`}></use>
                                    </svg>
                                </button>
                                <button className='voting-button' onClick={() => {vote(0)}}>
                                    <svg className="smile-dislike" viewBox="0 0 30 30">
                                        <use width="30" height="30" href={`${Icons}#smile-dislike`}></use>
                                    </svg>
                                </button>
                            </div> 

                            {votesDate  && <div>                               
                                 {votesDate.reverse().map(vote => {
                                        return <div className="vote-conteiner">
                                            <p className="vote_time">{vote.created_at}</p>
                                            <p>Image ID: <span className="vote_id">{vote.image_id}</span> was added to
                                                {vote.value === 1 ?  " Like" : vote.value === 0 ? " Dislike" : " Favourites"}</p>
                                            {vote.value === 1 ?  icons[0] : vote.value === 0 ? icons[2] : icons[1] }                  
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