import React, { FC } from 'react';
import { UpdatedStats, StatsHead, StatsDetails, LoadingIndicator } from 'styles';
import Text from './Text';
import { useCovidGlobalContext } from 'app/hooks';
import * as utils from 'app/utils';

const Global: FC = () => {
    const { global, date } = useCovidGlobalContext();

    return (
        <div className="stats-global">
            <UpdatedStats className="dashboard-update-status">
                <span className="update-status">
                    Last updated: {date.toUTCString()}
                </span>
            </UpdatedStats>
            <StatsHead className="stats-head">
                <h3>
                    <span>Global</span>
                </h3>
            </StatsHead>
            <StatsDetails className="stats-details">
                <div className="stats-confirmed">
                    <Text
                        textClass="stats-label stats-confirmed-label"
                        text="confirmed"
                        allowSpan={true}
                    />
                    {global?.TotalConfirmed ? (
                        <Text
                            textClass="stats-count stats-confirmed-count"
                            text={utils.statsAbbreviation(
                                global?.TotalConfirmed
                            )}
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
                    {global?.TotalRecovered ? (
                        <Text
                            textClass="stats-count stats-recovered-count"
                            text={utils.statsAbbreviation(
                                global?.TotalRecovered
                            )}
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
                    {global?.TotalDeaths ? (
                        <Text
                            textClass="stats-count stats-death-count"
                            text={utils.statsAbbreviation(global?.TotalDeaths)}
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

export default Global;
