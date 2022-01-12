import { React } from 'react';

import '../../css/bank/bankListComponent.css';

import BankListEntry from './bankListEntry';

const BankListComponent = () => {
    return (
        <div className='bankListComponentContainer'>
            <BankListEntry/>
            <BankListEntry/>
            <BankListEntry/>
            <BankListEntry/>
        </div>
    )
}

export default BankListComponent;