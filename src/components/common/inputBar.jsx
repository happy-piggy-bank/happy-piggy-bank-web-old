import { React, useRef } from 'react';
import '../../css/common/inputBar.css';

const InputBar = ({ placeHolder, isPassword, onChange }) => {
    const textRef = useRef();
    return (
        <div className="inputBarContainer">
            <input
                type={isPassword ? 'password' : 'text'}
                className='inputBarInputArea'
                placeholder={placeHolder}
                ref={textRef}
                onChange={() => onChange(textRef.current.value)} />
        </div>
    )
}

export default InputBar;