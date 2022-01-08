import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import MainHeader from './common/mainHeader';
import MainFooter from './common/mainFooter';
import PrimaryButton from './common/primaryButton';

import piggyBankImg from '../images/piggy_bank.png';
import '../css/mainScreen.css';

const MainScreen = () => {
    const [mainScreenRoute, setMainScreenRoute] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            setMainScreenRoute('myBank');
        } else {
            setMainScreenRoute('login');
        }
    }, []);

    return (
        <div className='mainScreenContainer'>
            <MainHeader/>
            <div className='mainBodyArea'>
                <div className='mainContentArea'>
                    <img src={piggyBankImg} width="60%" alt='돼지 저금통' />
                    <p>&nbsp;</p>
                    <p>0명의 사람들이</p>
                    <p>0개의 행복했던 순간과 함께</p>
                    <p>0원을 저금하고 있어요</p>
                    <p>&nbsp;</p>
                </div>
                <PrimaryButton buttonText="시작하기" onClick={() => navigate(mainScreenRoute)} />
            </div>
            <MainFooter/>
        </div>
    );
}

export default MainScreen;