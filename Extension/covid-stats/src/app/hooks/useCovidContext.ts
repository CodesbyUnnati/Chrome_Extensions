import { createContext, useContext } from 'react';

export const covidGlobalContext = createContext<Covid.GlobalStats>({
    global: {} as Covid.Global,
    date: new Date(0),
});
export const covidCountryContext = createContext<Covid.CountryStats>({
    country: [],
    date: new Date(0),
});

export const useCovidGlobalContext = () => {
    return useContext(covidGlobalContext);
};

export const useCovidCountryContext = () => {
    return useContext(covidCountryContext);
};
