import React from 'react';

import MainHeader from './common/mainHeader';
import MainFooter from './common/mainFooter';

const LoginScreen = () => {
    return (
        <div className='loginScreenContainer'>
            <MainHeader/>
            <div className='loginBodyArea'>
                <p>로그인 화면</p>
            </div>
            <MainFooter/>
        </div>
    );
}

export default LoginScreen;