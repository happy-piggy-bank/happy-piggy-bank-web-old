import React from 'react';

import "../../css/members/loginScreen.css";

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';
import PrimaryButton from '../common/primaryButton'; 

const LoginScreen = () => {
    return (
        <div className='loginScreenContainer'>
            <MainHeader/>
            <div className='loginBodyArea'>
                <div className='loginBoxArea'>
                    <p>로그인 화면</p>
                </div>
                <PrimaryButton buttonText={"저금 계속하기"} onClick={() => {}}/>
                <PrimaryButton buttonText={"저금 새로 시작하기"} onClick={() => {}}/>
            </div>
            <MainFooter/>
        </div>
    );
}

export default LoginScreen;