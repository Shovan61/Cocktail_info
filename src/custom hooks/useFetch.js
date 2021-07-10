import { useEffect, useState } from 'react';

function useFetch(url) {
    const [isLoading, setisLoading] = useState(true);
    const [data, setdata] = useState([]);

    useEffect(() => {
        fetchData();
    }, [url]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const getData = await response.json();

            setdata(getData);
            setisLoading(false);
        } catch {
            throw new Error('Url not found');
        }
    };

    return { isLoading, data };
}

export default useFetch;
