import { React } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../../css/bank/bankListEntry.css';

import entryHeaderImg from '../../images/pig_illustration.png';
import noImage from '../../images/no_image.gif';

const BankListEntry = () => {
    return (
        <div className='bankListEntryContainer'>
            <img className='bankListEntryHeadImg' src={entryHeaderImg} />
            <button className='bankListEntryDeleteButton'>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className='bankListEntryContentArea'>
                    <img src={noImage} width='200px' />
                    <div className='bankListEntryTextArea'>
                        <p><FontAwesomeIcon icon={faCoins} />&nbsp;1,000</p>
                        <p><FontAwesomeIcon icon={faCalendarAlt} />&nbsp;2022-01-12</p>
                    </div>
            </div>
        </div>
    );
}

export default BankListEntry;