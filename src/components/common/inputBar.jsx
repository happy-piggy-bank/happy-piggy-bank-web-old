import React from 'react';
import '../../css/common/inputBar.css';

const InputBar = ({ placeHolder, isPassword }) => {
    return (
        <div className="inputBarContainer">
            <input
                type={isPassword ? 'password' : 'text'}
                className='inputBarInputArea'
                placeholder={placeHolder} />
        </div>
    )
}

export default InputBar;