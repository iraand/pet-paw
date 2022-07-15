import axios from "axios";

async function fetchData (query_params) {

    const { limit, order, page, type, uri } = query_params;

    try{

        let query_params = {
            limit: limit,           
            page: page-1,
            order: order,
            mime_types: type
        }

        axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4"   

        let response = await axios.get(`https://api.thecatapi.com/v1/${uri}`, { params: query_params } ) 

        let pagination_count = response.headers['pagination-count'];    
        
        
        return {response_data:response.data, pagination_count};

    }catch(err){
        console.log(err);
    }
}

export default fetchData;