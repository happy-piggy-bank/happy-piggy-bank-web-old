import React from 'react';

import MainHeader from './common/mainHeader';
import MainFooter from './common/mainFooter';

const JoinScreen = () => {
    return (
        <div className='joinScreenContainer'>
            <MainHeader/>
            <div className='joinBodyArea'>
                <p>회원가입 화면</p>
            </div>
            <MainFooter/>
        </div>
    );
}

export default JoinScreen;