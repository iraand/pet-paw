import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";

export const Slider = (props) => {
    const [images, setImages] = useState(null);
    const [breed, setBreed] = useState(null);
    const [breedId, setBreedId] = useState('');

    useEffect(() => {

        if(props.images && props.images[0]){
            setBreed(props.images[0].breeds[0]);
            setImages(props.images.map( item => ({ url: item.url, id: item.id }))); 
            setBreedId(props.images[0].id);               
        }
    }, [props])

    return (<div  className='slider'>
        <div className='breed-id'>{breedId}</div>
        {images && <SimpleImageSlider
            width={'100%'}
            height={550}
            bgColor={'#fff'}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={false}
            loop
            slideDuration={1}
            onStartSlide = {(idx, length) => {
                setBreedId((images[idx-1].id))                
            }}
            title={images.id}
            navStyle={2}
        /> 
        }  
         
        {breed && <div className='breed-text'>
            <h1 className='breed-name'>{breed.name}</h1>
            <p className='breed-description'>{breed.description}</p>
            <div class='breed-info'>
                <p className='breed-temperament'><span className='bold'>Temperament:</span> {breed.temperament}</p>
                <div className='breed-span'>
                    <p><span className='bold'>Origin:</span> {breed.origin}</p>
                    <p><span className='bold'>Weight:</span> {breed.weight.metric} kgs</p>
                    <p><span className='bold'>Life span:</span> {breed.life_span} years</p>               
                </div>
            </div>

        </div>}        
    </div>)  
}