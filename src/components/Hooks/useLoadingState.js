import { useState, useEffect } from 'react';

const useLoadingState = (fetchDataFunction) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const fetchedData = await fetchDataFunction();
                setData(fetchedData);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [fetchDataFunction]);

    return { isLoading, data, error };
};

export default useLoadingState;
