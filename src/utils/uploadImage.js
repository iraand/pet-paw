import axios from "axios";

axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4";

export const uploadImage = async (file) => {
      
    try{        
        let formData = new FormData();
        formData.append('file', file);
        formData.append('sub_id', '053221978');
        
        const response =  await axios.post(`https://api.thecatapi.com/v1/images/upload`, formData, {headers: {'Content-Type':'multipart/form-data' }}) 
        
        return response;

    }catch(err){
        console.log(err);
    }
};