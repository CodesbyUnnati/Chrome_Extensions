export const statsAbbreviation = (props: number): string => {
    if (!props) return '';
    if (props >= 1e3 && props < 1e6) return (props / 1e3).toFixed(1) + 'K';
    if (props >= 1e6 && props < 1e9) return (props / 1e6).toFixed(1) + 'M';
    if (props >= 1e9 && props < 1e12) return (props / 1e9).toFixed(1) + 'B';
    if (props >= 1e12) return (props / 1e12).toFixed(1) + 'T';
    return props.toString();
};

export const filterCountry = (
    countries: Covid.Country[],
    country_code: string
): Covid.Country[] => {
    let country: Covid.Country[] = [];
    if (!countries) return [];
    let length: number = countries.length;
    while (length--) {
        if (countries[length].CountryCode === country_code) {
            country.push(countries[length]);
        }
    }
    return country;
};
