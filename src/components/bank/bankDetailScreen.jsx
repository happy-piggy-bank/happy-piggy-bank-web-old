import { React } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

import bankNotFoundImg from "../../images/no_bank_data.png";
import "../../css/bank/bankDetailScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";

const BankDetailScreen = () => {
  const navigate = useNavigate();

  const BankNotFound = () => {
    return (
      <div className="bankNotFoundContentArea">
        <img src={bankNotFoundImg} width="60%" />
        <p>&nbsp;</p>
        <p>존재하지 않는 추억이에요 :(</p>
        <p>&nbsp;</p>
      </div>
    );
  };

  const BankBody = () => {
    return (
      <div className="bankDetailBodyArea">
        <div className="bankDetailTitleArea">
          <div className="bankDetailTitle">제목</div>
          <div className="bankDetailAmount">
            <FontAwesomeIcon icon={faCoins} />
            &nbsp;1,000
          </div>
        </div>
        <div className="bankDetailImage">이미지</div>
        <div className="bankDetailContent">본문</div>
      </div>
    );
  };

  return (
    <div className="bankDetailScreenContainer">
      <MainHeader />
      <BankBody />
      <PrimaryButton
        buttonText={"목록으로 돌아가기"}
        onClick={() => navigate("/bank")}
      />
      <PrimaryButton
        buttonText={"삭제하기"}
        onClick={() => navigate("/bank")}
      />
      <MainFooter />
    </div>
  );
};

export default BankDetailScreen;
