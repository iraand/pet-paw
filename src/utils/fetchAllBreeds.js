import axios from "axios";

async function fetchAllBreeds() {

    try{
        axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4" ;  
        let response = await axios.get('https://api.thecatapi.com/v1/breeds');  

        return  localStorage.setItem('breeds',(JSON.stringify(response.data))); 
        
    }catch(err){
        console.log(err);
        localStorage.clear();
    }
}

fetchAllBreeds();

export default fetchAllBreeds;