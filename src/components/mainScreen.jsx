import React from 'react';
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
                <button className='primaryButton'>시작하기</button>
            </div>
            <div className='footerArea'>
                <div className='footerText'>Made by 김뷰엘 with ♥</div>
            </div>
        </div>
    );
}

export default MainScreen;