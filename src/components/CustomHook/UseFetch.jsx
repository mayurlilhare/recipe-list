import React, { useEffect, useState } from 'react';

function UseFetch({url, options={}}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetchData();
    },[url]);

    async function fetchData() {
        setLoading(true);

        await fetch('https://dummyjson.com/recipes')
        .then(async (resp)=>{
           
                let result = await resp.json();
                setLoading(false);
                setError(false);
                setData(result)
                // console.log(result);
                
        })
        .catch(err=>{
            // console.log(err);
            
            setLoading(false);
            setError(true);
            setData(null)
        })
    }

    return {
        data, error, loading
    }
}

export default UseFetch;