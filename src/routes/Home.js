import React from 'react';
import CoinDetails from '../components/CoinDetails';
import Latest from '../components/Latest';

const Home = ({ coins }) => {
    return (
        <div>
            <CoinDetails coins={coins} />
            <Latest />
        </div>
    );
}

export default Home;
