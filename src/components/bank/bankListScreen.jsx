import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import "../../css/bank/bankListScreen.css";
import noBankListImg from "../../images/no_bank_data.png";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";
import PrimaryButton from "../common/primaryButton";
import MyInfoButton from "../common/myInfoButton";

import BankListComponent from "./bankListComponent";

const BankListScreen = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  const MyInfoPopup = () => {
    return (
      <div className="myInfoPopup">
        <div className="myInfoPopupInner">
          <button className="myInfoPopupCloseButton">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={() => setPopupOpen(false)}
            />
          </button>
          <PrimaryButton
            buttonText={"내 정보 수정"}
            onClick={() => navigate("/myPage")}
          />
          <PrimaryButton
            buttonText={"로그아웃"}
            onClick={() => navigate("/")}
          />
          <div className="myInfoPopupEmail">
            <a href="mailto:dokdo2005@gmail.com?subject=[나의 행복한 돼지 저금통] 버그 제보 및 건의">
              버그 제보 및 건의
            </a>
          </div>
        </div>
      </div>
    );
  };

  const NoBankList = () => {
    return (
      <div className="noBankListComponentContainer">
        <div className="noBankListBodyArea">
          <div className="noBankListContentArea">
            <img src={noBankListImg} width="60%" />
            <p>&nbsp;</p>
            <p>아직 우리에게 쌓인 추억이 없어요 :(</p>
            <p>&nbsp;</p>
          </div>
          <PrimaryButton
            buttonText={"새로운 추억 쌓기"}
            onClick={() => navigate("/create")}
          />
        </div>
      </div>
    );
  };

  const BankList = () => {
    return (
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
    );
  };

  return (
    <div className="bankListScreenContainer">
      <MainHeader />
      <BankList />
      <MainFooter />
      <button className="createBankButton" onClick={() => navigate("/create")}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {isPopupOpen ? <MyInfoPopup /> : null}
    </div>
  );
};

export default BankListScreen;
