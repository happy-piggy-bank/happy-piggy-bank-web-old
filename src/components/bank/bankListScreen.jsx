import { React } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import '../../css/bank/bankListScreen.css';

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';

import NoBankList from './noBankList';
import BankListComponent from './bankListComponent';

const BankListScreen = () => {
    const navigate = useNavigate();

    return (
        <div className='bankListScreenContainer'>
            <MainHeader/>
            <div className='bankListBodyArea'>
                <div className='bankListEntryArea'>
                    <BankListComponent/>
                </div>
            </div>
            <button className='createBankButton' onClick={() => navigate("/create")}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <MainFooter/>
        </div>
    )
}

export default BankListScreen;