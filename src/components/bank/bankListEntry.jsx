import { React } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';

import '../../css/bank/bankListEntry.css';

import entryHeaderImg from '../../images/pig_illustration.png';
import noImage from '../../images/no_image.gif';

const BankListEntry = () => {
    return (
        <div className='bankListEntryContainer'>
            <img className='bankListEntryHeadImg' src={entryHeaderImg} />
            <div className='bankListEntryContentArea'>
                    <img src={noImage} width='200px' />
            </div>
        </div>
    );
}

export default BankListEntry;