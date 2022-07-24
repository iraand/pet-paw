import { useState, useEffect } from "react";
import axios from "axios";
let isCancelled = false;

const useFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        
        async function fetchAllBreeds() {
            try{
                axios.defaults.headers.common['x-api-key'] = "531a21b2-f437-4298-809c-b7c57253fac4" ;  
                
                const response = await axios.get('https://api.thecatapi.com/v1/breeds');
                
                setData(response); 
                
                localStorage.setItem('breeds',(JSON.stringify(response.data)));  

            }catch(err){
                console.log(err);
            }
        }

        if (!isCancelled) {
            fetchAllBreeds();
        }  
        
        return () => {
            isCancelled = true;
        };
        
    }, []);

    return [data];
};
  
  export default useFetch;