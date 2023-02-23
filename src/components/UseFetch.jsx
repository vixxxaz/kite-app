



import axios from 'axios';
import { useState , useEffect } from 'react'

export const UseFetch = (url) => {

    const [data, setData] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect( () => {
       
        
        !loading && 
            axios
            .get(url)
            .then((res) => {
                setLoading(true);
                setData(res.data.daily);
                setError("")
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message);
                setData([]);
                setError("something went wrong !")

            })
    }, [loading, url])
    

  return {
    data, error, loading
    }
}

