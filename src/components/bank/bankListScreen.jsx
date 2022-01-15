import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "../../css/bank/bankListScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";
import PrimaryButton from "../common/primaryButton";
import MyInfoButton from "../common/myInfoButton";

// import NoBankList from "./noBankList";
import BankListComponent from "./bankListComponent";

const MyInfoPopup = () => {
  return (
    <div className="myInfoPopup">
      <PrimaryButton buttonText={"내 정보 수정"} onClick={() => {}} />
      <PrimaryButton buttonText={"로그아웃"} onClick={() => {}} />
    </div>
  );
};

const BankListScreen = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bankListScreenContainer">
      <MainHeader />
      <div className="bankListBodyArea">
        <div className="bankListEntryArea">
          <div className="bankListDescriptionArea">
            <div className="bankListDescLeft">
              <p>{new Date().getFullYear()}년의 김뷰엘님은</p>
              <p>0번의 행복했던 순간과 함께</p>
              <p>0원의 행복을 저금했어요!</p>
            </div>
            <div className="bankListDescRight">
              <MyInfoButton onClick={() => setPopupOpen(true)} />
            </div>
          </div>
          <BankListComponent />
        </div>
      </div>
      <button className="createBankButton" onClick={() => navigate("/create")}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <MainFooter />
    </div>
  );
};

export default BankListScreen;
