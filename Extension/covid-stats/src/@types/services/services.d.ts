declare module Covid {
    interface Global {
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
    }

    interface Country {
        Country: string;
        CountryCode: string;
        Slug: string;
        NewConfirmed: number;
        TotalConfirmed: number;
        NewDeaths: number;
        TotalDeaths: number;
        NewRecovered: number;
        TotalRecovered: number;
        Date: Date;
    }

    interface CovidStats {
        Global: Global;
        Countries: Country[];
        Date: Date;
    }

    /**
     * Especially for Context API
     */

    interface GlobalStats {
        global: Global;
        date: Date;
    }

    interface CountryStats {
        country: Country[];
        date: Date;
    }
}
