import { React } from 'react';

import '../../css/bank/bankListScreen.css';

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';

import NoBankList from './noBankList';
import BankListComponent from './bankListComponent';

const BankListScreen = () => {
    return (
        <div className='bankListScreenContainer'>
            <MainHeader/>
            <div className='bankListBodyArea'>
                <div className='bankListEntryArea'>
                    <BankListComponent/>
                </div>
            </div>
            <MainFooter/>
        </div>
    )
}

export default BankListScreen;