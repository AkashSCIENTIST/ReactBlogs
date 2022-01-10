import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsLoading] = useState(true);

    //runs everytime when component renders
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error("Could not featch"); 
                }
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setData(data);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log("Fetch aborted");
                }
                else{
                    setError(err.message);
                    console.log(err.message);
                    setIsLoading(false);
                }
            });
        return () => abortCont.abort();
    }, [url]); 

    return {data, isPending, error};
}

export default useFetch;