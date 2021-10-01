import React, { FC } from 'react';
import { DashboardHead, SectionTitle } from 'styles';
import {
    useAsyncTask,
    covidCountryContext,
    covidGlobalContext,
    useUserCountry,
} from 'app/hooks';
import * as utils from 'app/utils/';
import Country from 'app/components/common/Country';
import Global from 'app/components/common/Global';

const Dashboard: FC = () => {
    const response = useAsyncTask('https://api.covid19api.com/summary');
    const user_country = useUserCountry('https://extreme-ip-lookup.com/json/');
    let country = utils.filterCountry(
        response?.Countries,
        user_country?.countryCode
    );
    const countryProvider: Covid.CountryStats = {
        country: country,
        date: covid_date_format(response?.Date),
    };

    const globalProvider: Covid.GlobalStats = {
        global: response?.Global,
        date: covid_date_format(response?.Date),
    };

    return (
        <div className="ashiishme-covid-dashboard">
            <DashboardHead className="dashboard-header">
                <div className="section-title">
                    <SectionTitle>COVID-19 STATS</SectionTitle>
                </div>
            </DashboardHead>

            <div className="covid-stats">
                <covidCountryContext.Provider value={countryProvider}>
                    <Country />
                </covidCountryContext.Provider>
                <covidGlobalContext.Provider value={globalProvider}>
                    <Global />
                </covidGlobalContext.Provider>
            </div>
        </div>
    );
};

export default Dashboard;

const covid_date_format = (props: Date): Date => {
    return new Date(props);
};
