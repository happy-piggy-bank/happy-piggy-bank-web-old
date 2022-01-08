import React from 'react';

import MainHeader from './common/mainHeader';
import MainFooter from './common/mainFooter';

const JoinScreen = () => {
    return (
        <div className='joinScreenContainer'>
            <MainHeader/>
            <div className='bodyArea'></div>
            <MainFooter/>
        </div>
    );
}

export default JoinScreen;