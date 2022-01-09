import { React, useState, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons';

import '../../css/bank/createBankScreen.css';

import MainHeader from '../common/mainHeader';
import MainFooter from '../common/mainFooter';

import PrimaryButton from '../common/primaryButton';
import InputBar from '../common/inputBar';
import InputText from '../common/inputText';

const CreateBankScreen = () => {
    const [bankTitle, setTitle] = useState(null);
    const [bankContents, setContents] = useState(null);
    const [bankAmount, setAmount] = useState(0);
    const [file, setFile] = useState(null);
    const inputFile = useRef(null);
    const navigate = useNavigate();

    return (
        <div className='createBankScreenContainer'>
            <MainHeader/>
            <div className='createBankBodyArea'>
                <div className='createBankBoxArea'>
                    <InputBar placeHolder={"제목"} onChange={setTitle} />
                    <InputBar placeHolder={"저금액"} onChange={setAmount} />
                    <InputText placeHolder={"내용"} onChange={setContents} />
                    <div className='createBankFileUploadArea'>
                        {inputFile.current?.value ? (
                            <div className='createBankFileUploadText'>
                                {inputFile.current.value}
                            </div>
                        ) : null}
                        <input type='file' id='file' ref={inputFile} onChange={(e) => setFile(e.target.files[0])} style={{display: 'none'}}/>
                        <button className='createBankFileUploadButton' onClick={() => { inputFile.current.click(); }}>
                            <p><FontAwesomeIcon icon={faImage} size="4x" /></p>
                            <p>사진 추가</p>
                        </button>
                    </div>
                </div>
                <PrimaryButton buttonText={"저금하기"} onClick={() => {}}/>
            </div>
            <MainFooter/>
        </div>
    );
}

export default CreateBankScreen;