import React, { useState, useEffect, useCallback} from "react";

import {useDropzone} from 'react-dropzone'
import CircleLoader from "react-spinners/ClipLoader";

import fetchData  from "../utils/fetchData";
import {uploadImage}  from "../utils/uploadImage";
import { vote } from "../utils/fetchVotesFavourites";
import split  from "../utils/split";

import { Header } from "../components/Header";
import { SelectBreeds } from "../components/SelectBreeds";
import { ButtonGoBack } from "../components/ButtonGoBack";
import { Limit } from "../components/Limit";
import { Order } from "../components/Order";
import { Type } from "../components/Type";
import { Modal } from '../components/Modal.js';
import Icons from '../images/icons.svg'

export default function Gallery() {
    const [breedsImages, setBreedsImages] = useState(null);
    const [uri, setUri] = useState('images/search');
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState('Rand');
    const [type, setType] = useState(null);
    const [value, setValue] = useState(null);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [opacity, setOpacity] = useState(1);
    const [shellDisableNext, setShellDisableNext] = useState(false);
    const [shellDisablePrev, setShellDisablePrev] = useState(true); 
    const [showModal, setShowModal] = useState(false); 

    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [ bgColor, setBgColor] = useState({backgroundColor: '#FFFFFF'}); 
    const [ arror, setArror] = useState(false); 

    const onDrop = useCallback(acceptedFiles => {
        setFiles([]);
        setBgColor({background: '#FFFFFF'});
        setUploaded(false);
        setUploading(false);
        setArror(false);
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
      }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    
    document.title = 'PatsPaw - Gallery';
    let isCancelled = false;    

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
            
            if (!isCancelled) {
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
                setPages(getNumPages);

                setShellDisableNext(page === Math.ceil(pagination_count / limit) || pagination_count < limit); 
                setShellDisablePrev(page === 1); 
            }
        }
        
        getImages();

        return () => {
            isCancelled = true;  
            files.forEach(file => URL.revokeObjectURL(file.preview)); 
        };       

    }, [uri, page, type, limit, order])


    const handleChange = (e) => {
        setLoading(true);
        setOpacity(0.5);
        if (e) {           
            setPage(1);    
            setValue(e);
            setPages(0); 
            setOrder('Asc')
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
        setPages(0);                 
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

    const castVote = async (image_id) => {
        await vote({val: "favourites", image_id});
    }

    const upload = async () => {
        setUploading(true);
        const file = files[0];

        const response = await uploadImage(file);

        if(response && response.data.id){
            setUploading(false);
            setFiles([]);
            setBgColor({background: '#FFFFFF'});
            setUploaded(true);
            setArror(false);
        }else{
            setBgColor({background: '#FBE0DC'});
            setUploaded(false);
            setArror(true);
        }
    }

    return (      
        <div className="content"> 
            <Header />
            <div className="breeds__container">  
                <div className="breeds__select-section">  
                    <ButtonGoBack navigate={-1} />                     
                    <h1 className="title-page">GALLERY</h1>
                    <div className="wrapper upload__wrapper">
                        <button type="button"
                            aria-label="upload"
                            className="button button-upload"
                            onClick={() => setShowModal(true)}
                        >
                            <svg className="icon-upload" viewBox="0 0 16 16">
                                <use width="16" height="16" href={`${Icons}#upload`}></use>
                            </svg>
                            UPLOAD
                        </button>
                    </div>
                </div> 
                <div className="gallery__select-section">
                    <div>
                        <span className="label">ORDER</span>
                        <Order onChange={val => {
                            setLoading(true);
                            setOpacity(0.5);
                            setOrder(val)}}
                            className="select-order"
                        />
                    </div> 
                    <div>
                        <span className="label">TYPE</span>                    
                     <Type onChange={handleChangeType} className="select-order"/> 
                    </div>
                    <div>
                        <span className="label">BREED</span>                   
                        <SelectBreeds onChange={handleChange} placeholder={'None'} defaultValue={null} value={value} className="gallery__breeds-select"/>                      
                    </div>
                    <div>
                        <span className="label">LIMIT</span>                                                       
                        <div className="wrapper gallery__wrapper">                        
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
                </div>

                {(() => {
                    
                    if(breedsImages) {

                        const numContainers = breedsImages.length;
                        
                        let container = [];

                        for(let i=0; i<numContainers; i++){
                            container.push(<div key={i} className="images__container gallery__images__container" style={{opacity: opacity}}>
                                
                                {breedsImages[i].map((image, index) => {
                                    return (
                                        <div className={`img${index+1} breeds__image`}
                                            key={image.image_id}
                                            style={{backgroundImage: `url('${image.image_url}')`}}
                                        >
                                            <div className="breeds__tiltle" key={image.image_name}>
                                                <button className="button button__love"  onClick={() => castVote(image.image_id)}>
                                                    <svg className="icon-love" viewBox="0 0 20 17">
                                                        <use width="20" height="17" href={`${Icons}#smile-love`}></use>
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
                <Modal show={showModal} handleClose={ () => setShowModal(false) } >
                    <p className="modal_title">Upload a .jpg or .png Cat Image</p>
                    <p className="modal_text">Any uploads must comply with the <a target="blank" href="https://thecatapi.com/privacy"> upload guidelines</a> or face deletion.</p>
                    <div className="modal_image-container" {...getRootProps()} style={bgColor}>                       
                        <input {...getInputProps()} />
                        
                        { files.length > 0 ? 
                            <aside className="thumbs-container">
                                {files.map(file => (
                                    <div className="thumb" key={file.name}>
                                        <div className="thumb-inner">       
                                        <img
                                            className="thumb-img"
                                            src={file.preview}
                                            alt={file.name}
                                            onLoad={() => { URL.revokeObjectURL(file.preview) }}
                                        />
                                        </div>
                                    </div>
                                    ))
                                }
                            </aside> : 
                            isDragActive ?
                                <p className="modal_text modal_text_bold">Drop the files here ...</p> :
                                <p className="modal_text modal_text_bold"><span>Drag here</span> your file or <span>Click here</span> to upload</p>                                                   
                        }                   
                    </div>
 
                    
                    { files.length > 0 ? 
                        <><p className="modal_text">{`Image File Name: ${files[0].name}`}</p>
                        { !arror && <button type="button" className="button upload_button" onClick={() => {upload()}}>
                        { uploading ?                       
                            <><CircleLoader speedMultiplier={1} color={"#FFFFFF"} size={16} className="button-loader"/>
                                UPLOADING
                            </>
                            : 'UPLOAD PHOTO'}
                        </button>}

                        { arror ? 
                            <div className="upload-conteiner">
                                <svg className="icon-notdone" viewBox="0 0 20 20">
                                    <use width="20" height="20" href={`${Icons}#not-done`}></use>
                                </svg>
                                <p>No Cat found - try a different one!</p>
                            </div>
                            : null
                        }

                        </> :
                        <>
                            <p className="modal_text">{`No file selected`}</p> 

                            { uploaded ? 
                                <div className="upload-conteiner">
                                    <svg className="icon-done" viewBox="0 0 20 20">
                                        <use width="20" height="20" href={`${Icons}#done`}></use>
                                    </svg>
                                    <p>Thanks for the Upload - Cat found!</p>
                                </div>
                                : null
                            }
                        </>                       
                    }
                </Modal>

                {loading && <CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader"/>}
            </div>
        </div>         
    )
} 