import { useState, useEffect } from 'react';
import httpService from 'services/http.services';

const useAsyncTask = (url: string): Covid.CovidStats => {
    const [response, setResponse] = useState<Covid.CovidStats>({
        Global: {} as Covid.Global,
        Countries: [],
        Date: new Date(),
    });
    useEffect(() => {
        const getCovidStats = async (): Promise<void> => {
            const response: Covid.CovidStats = await httpService({
                url: url,
            });
            setResponse(response);
        };
        getCovidStats();
    }, [url]);
    return response;
};

export default useAsyncTask;
