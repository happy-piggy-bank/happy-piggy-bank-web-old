import React from 'react';
import piggyBankImg from '../images/piggy_bank.png';
import '../css/mainScreen.css';
import '../css/common.css';

const MainScreen = () => {
    return (
        <div className='mainScreenContainer'>
            <div className='headerArea'>
                <div className='titleText'>나의 행복한 돼지 저금통</div>
                <div className='descriptionText'>여러분의 행복했던 순간을 저금해보세요</div>
            </div>
            <div className='bodyArea'>
                <img src={piggyBankImg} width="60%" alt='' />
                <p>&nbsp;</p>
                <p>0명의 사람들이</p>
                <p>0개의 행복했던 순간과 함께</p>
                <p>0원을 저금하고 있어요</p>
                <p>&nbsp;</p>
                <button className='primaryButton' onClick={() => alert('아직 오픈 전이에요!')}>시작하기</button>
            </div>
            <div className='footerArea'>
                <div className='footerText'>
                    <p>made by 김뷰엘 with ♥</p>
                </div>
            </div>
        </div>
    );
}

export default MainScreen;