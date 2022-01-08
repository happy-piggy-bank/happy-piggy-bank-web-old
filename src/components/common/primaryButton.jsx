import React from 'react';
import '../../css/common.css';

const PrimaryButton = ({ buttonText, onClick }) => {
    return (
        <button className='primaryButton' onClick={() => onClick()}>{buttonText}</button>
    );
}

export default PrimaryButton;