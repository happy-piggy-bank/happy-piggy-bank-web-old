import React from 'react';
import { useNavigate } from "react-router-dom";

import '../../css/members/joinScreen.css';

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';

import PrimaryButton from '../common/primaryButton';
import InputBar from '../common/inputBar';

const JoinScreen = () => {
    const navigate = useNavigate();

    return (
        <div className='joinScreenContainer'>
            <MainHeader/>
            <div className='joinBodyArea'>
                <div className='joinBoxArea'>
                    <InputBar placeHolder={"아이디 (이메일 주소)"} />
                    <InputBar placeHolder={"비밀번호"} isPassword={true} />
                    <InputBar placeHolder={"이름"} />
                </div>
                <PrimaryButton buttonText={"회원가입"} onClick={() => {}}/>
                <div className="loginLinkText">
                    이미 계정이 있으신가요?&nbsp;
                    <a href="" onClick={() => navigate('/login')}>로그인</a>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default JoinScreen;