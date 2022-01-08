import { React, useState } from 'react';
import { useNavigate } from "react-router-dom";

import "../../css/members/loginScreen.css";

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';

import PrimaryButton from '../common/primaryButton';
import InputBar from '../common/inputBar';

const LoginScreen = () => {
    const [userEmail, setEmail] = useState(null);
    const [userPw, setPw] = useState(null);
    const navigate = useNavigate();

    return (
        <div className='loginScreenContainer'>
            <MainHeader/>
            <div className='loginBodyArea'>
                <div className='loginBoxArea'>
                    <InputBar placeHolder={"아이디 (이메일 주소)"} onChange={setEmail} />
                    <InputBar placeHolder={"비밀번호"} isPassword={true} onChange={setPw} />
                </div>
                <PrimaryButton buttonText={"로그인"} onClick={() => console.log({ userEmail, userPw })}/>
                <div className="joinLinkText">
                    처음 오셨나요?&nbsp;
                    <a href="" onClick={() => navigate('/join')}>회원가입</a>
                </div>
            </div>
            <MainFooter/>
        </div>
    );
}

export default LoginScreen;