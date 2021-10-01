import { useState, useEffect } from 'react';
import httpService from 'services/http.services';

const useUserCountry = (url: string): any => {
    const [country, setCountry] = useState<any>({});
    useEffect(() => {
        const getUserCountry = async (): Promise<void> => {
            const response: any = await httpService({
                url: url,
            });
            setCountry(response);
        };
        getUserCountry();
    }, [url]);
    return country;
};

export default useUserCountry;
