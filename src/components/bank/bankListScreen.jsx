import { React } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';

import '../../css/bank/bankListScreen.css';

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';

import NoBankList from './noBankList';

const BankListScreen = () => {
    return (
        <div className='bankListScreenContainer'>
            <MainHeader/>
            <div className='bankListBodyArea'>
                <div className='bankListEntryArea'>
                    <NoBankList/>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}

export default BankListScreen;