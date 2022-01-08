import React from 'react';
import { useNavigate } from "react-router-dom";

import "../../css/members/loginScreen.css";

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';
import PrimaryButton from '../common/primaryButton';

import InputBar from '../common/inputBar';

const LoginScreen = () => {
    const navigate = useNavigate();

    return (
        <div className='loginScreenContainer'>
            <MainHeader/>
            <div className='loginBodyArea'>
                <div className='loginBoxArea'>
                    <InputBar placeHolder={"아이디 (이메일 주소)"} />
                    <InputBar placeHolder={"비밀번호"} isPassword={true} />
                </div>
                <PrimaryButton buttonText={"저금 계속하기"} onClick={() => {}}/>
                <PrimaryButton buttonText={"저금 새로 시작하기"} onClick={() => navigate('/join')}/>
            </div>
            <MainFooter/>
        </div>
    );
}

export default LoginScreen;