import axios from "axios";
axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4" ;

export async function vote(props) {

    if(props.val==="favourites"){
        let body = {
            image_id: props.image_id,
            sub_id: '053221978'
        }       
        return await axios.post('https://api.thecatapi.com/v1/favourites', body )

    }else{
        let body = {
            image_id: props.image_id,
            sub_id: '053221978',
            value: props.val
        }
        return await axios.post('https://api.thecatapi.com/v1/votes', body );
    }
};

export async function getVotes(limit){
    let query_params = {
        limit: limit,
        order: 'DESC',
        sub_id: '053221978'
    }


  let response = await axios.get('https://api.thecatapi.com/v1/votes', { params: query_params } )
  
  response.data.forEach(element => {
    element.created_at = new Date(element.created_at).toJSON().slice(11,16);
  });

  return response.data;    
}

export async function getFavourites(limit, page) {         
  let query_params = {
      sub_id: '053221978',
      limit: limit,
      page:  page-1,
      order: 'DESC'      
  }
  
  let response = await axios.get('https://api.thecatapi.com/v1/favourites', { params: query_params } ) 
  let pagination_count = response.headers['pagination-count']; 

  response.data.forEach(element => {
      element.created_at = new Date(element.created_at).toJSON().slice(11,16);
   });
   
    return {response_data: response.data, pagination_count};
};

export async function getLikes(page, val){
    try{
        let query_params = {
            limit: 30,
            page: page,
            order: 'ASC',
            sub_id: '053221978',
            value: val
        }

    
    let response = await axios.get('https://api.thecatapi.com/v1/votes', { params: query_params } )

    let pagination_count = response.headers['pagination-count']; 

    response.data.forEach(element => {
        element.created_at = new Date(element.created_at).toJSON().slice(11,16);
    });

    let filteredData = response.data.filter((item) =>  item.value === val ); 

    if(filteredData){
        const images = await getImages(filteredData);

        return { response_data: images, pagination_count }; 
    }else{
        return; 
    }
    

    }catch(err){
        console.log(err);
    }
}

const getImages = async (data) => {
    const images = [];

    for(let i = 0; i < data.length; i++){
        images.push(await axios.get(`https://api.thecatapi.com/v1/images/${data[i].image_id}`));
    }

    data.map( (item, i) => {
       return Object.assign(item, {image_url: images[i].data.url});           
    });

    return data;
}

export const removeFavourites = async (favourite_id) => {
    const response = await axios.delete(`https://api.thecatapi.com/v1/favourites/${favourite_id}`);

    return response.data;
}

export const removeVotes = async (vote_id) => {
    const response = await axios.delete(`https://api.thecatapi.com/v1/votes/${vote_id}`);
    
    return response.data;
}


export const favouritesLikesDislikes = async () => {
    let data = [];
    const response_favourites = await getFavourites(4, 1);
    const response_data_favourites = response_favourites.response_data;
    const response_data_votes = await getVotes(4);

    const savedImages = await JSON.parse(localStorage.getItem('removedImages'));

    if (savedImages) data = [...response_data_favourites, ...response_data_votes, ...savedImages];

    if (!savedImages) data = [...response_data_favourites, ...response_data_votes];

    const sortData = sortItems(data).reverse();

    if ( sortData.length > 4) sortData.splice(5,sortData.length-4);

    return sortData;
}

export const collectRemovedImages = async (image_id) => {
    const time = new Date();

    const response = await axios.get(`https://api.thecatapi.com/v1/images/${image_id}`) 
    let allImages = [];
    
    const savedImages = await JSON.parse(localStorage.getItem('removedImages'));
    
    if(savedImages) allImages =  [response.data, ...savedImages]; 

    if(!savedImages) allImages =  [response.data]; 

    if ( allImages.length > 3 ) allImages.splice(4,allImages.length-3);

    allImages.map(item => (Object.assign(item, {value: -1, image_id: item.id, created_at: time.toJSON().slice(11,16)})));

    return localStorage.setItem('removedImages',(JSON.stringify(allImages)));  
};

const sortItems = (arr) => {
    arr.sort(function(a, b) {
        if (a.created_at > b.created_at) {
          return 1; }
        if (a.created_at < b.created_at) {
          return -1; }
        return 0;
    });
    return arr;   
};
