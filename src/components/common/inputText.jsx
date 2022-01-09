import { React, useRef } from 'react';
import '../../css/common/inputText.css';

const InputText = ({ placeHolder, onChange }) => {
    const textRef = useRef();
    return (
        <div className="inputTextContainer">
            <textarea
                className='inputTextInputArea'
                placeholder={placeHolder}
                ref={textRef}
                onChange={() => onChange(textRef.current.value)} />
        </div>
    )
}

export default InputText;