import React, { FC } from 'react';
import { UpdatedStats, StatsHead, StatsDetails, LoadingIndicator } from 'styles';
import Text from './Text';
import { useCovidCountryContext } from 'app/hooks';
import * as utils from 'app/utils';
const Country: FC = () => {
    const { country, date } = useCovidCountryContext();
    return (
        <div className="stats-user-country">
            <UpdatedStats className="dashboard-update-status">
                <span className="update-status">
                    Last updated: {date.toUTCString()}
                </span>
            </UpdatedStats>
            <StatsHead className="stats-head">
                <h3>
                    <span>{country[0]?.Country}</span>
                </h3>
            </StatsHead>
            <StatsDetails className="stats-details">
                <div className="stats-confirmed">
                    <Text
                        textClass="stats-label stats-confirmed-label"
                        text="confirmed"
                        allowSpan={true}
                    />
                    {country[0]?.TotalConfirmed ? (
                        <Text
                            textClass="stats-count stats-confirmed-count"
                            text={
                                utils.statsAbbreviation(
                                    country[0]?.TotalConfirmed
                                )
                            }
                            allowSpan={false}
                        />
                    ) : (
                        <LoadingIndicator />
                    )}
                </div>
                <div className="stats-recovered">
                    <Text
                        textClass="stats-label stats-recovered-label"
                        text="recovered"
                        allowSpan={true}
                    />
                    {country[0]?.TotalRecovered ? (
                        <Text
                            textClass="stats-count stats-recovered-count"
                            text={
                                utils.statsAbbreviation(
                                    country[0]?.TotalRecovered
                                )
                            }
                            allowSpan={false}
                        />
                    ) : (
                        <LoadingIndicator />
                    )}
                </div>
                <div className="stats-death">
                    <Text
                        textClass="stats-label stats-death-label"
                        text="death"
                        allowSpan={true}
                    />
                    {country[0]?.TotalDeaths ? (
                        <Text
                            textClass="stats-count stats-death-count"
                            text={
                                utils.statsAbbreviation(
                                    country[0]?.TotalDeaths
                                )
                            }
                            allowSpan={false}
                        />
                    ) : (
                        <LoadingIndicator />
                    )}
                </div>
            </StatsDetails>
        </div>
    );
};

export default Country;
