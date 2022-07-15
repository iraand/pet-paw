import axios from "axios";

export async function favouriteImage(image_id) {

    try{
        let post_body = {
            image_id: image_id,
            sub_id:"User-123"
        }
        let response = await axios.post('https://api.thecatapi.com/v1/favourites', post_body ) 

        console.log(response);

        return response;

    }catch(error){
        console.log(error);
    }
};


// export const deleteFavouriteImage = async (favourite_id) => {
//     try{
//         let response = await axios.delete('https://api.thecatapi.com/v1/favourites/'+favourite_id ) 
//         favourites = response.data 
            
//     }catch(err){
//         console.log(err);
//     }
// };

export async function getFavourites(query_params) {
    const { limit, page } = query_params;

    try{
                    
        let query_params = {
            limit: limit || 10,
            order: 'DESC',
            page:  page-1 || 100,
        }
        axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4" ;
        let response = await axios.get('https://api.thecatapi.com/v1/favourites', { params: query_params } ) 
        let favourites = response.data 
        let pagination_count = response.headers['pagination-count'];


        return ({favourites, pagination_count});

    }catch(err){
        console.log(err)
    }
};


        