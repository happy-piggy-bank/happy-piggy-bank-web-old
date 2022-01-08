import React from 'react';
import '../../css/common/primaryButton.css';

const PrimaryButton = ({ buttonText, onClick }) => {
    return (
        <div className='primaryButtonArea'>
            <button className='primaryButton' onClick={() => onClick()}>{buttonText}</button>
        </div>
    );
}

export default PrimaryButton;