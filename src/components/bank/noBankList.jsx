import { React } from 'react';

import PrimaryButton from '../common/primaryButton';

import noBankListImg from '../../images/no_bank_data.png';
import '../../css/bank/noBankList.css';

const NoBankList = () => {
    return (
        <div className='noBankListComponentContainer'>
            <div className='noBankListBodyArea'>
                <div className='noBankListContentArea'>
                    <img src={noBankListImg} width='60%' />
                    <p>&nbsp;</p>
                    <p>아직 우리에게 쌓인 추억이 없어요 :(</p>
                    <p>&nbsp;</p>
                </div>
                <PrimaryButton buttonText={"새로운 추억 쌓기"} onClick={() => {}}/>
            </div>
        </div>
    )
}

export default NoBankList;