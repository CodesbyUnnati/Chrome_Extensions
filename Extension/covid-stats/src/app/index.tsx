import React, { FC } from 'react';

import { Dashboard } from './components/popup';
import { Container } from 'styles';
const App: FC = () => {
    return (
        <Container className="ashiishme_covid_container">
            <Dashboard />
        </Container>
    );
};

export default App;
