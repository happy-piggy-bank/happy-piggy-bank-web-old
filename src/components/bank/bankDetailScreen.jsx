import { React } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/bank/bankDetailScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";

const BankDetailScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="bankDetailScreenContainer">
      <MainHeader />
      <div className="bankDetailBodyArea">
        <PrimaryButton
          buttonText={"목록으로 돌아가기"}
          onClick={() => navigate("/bank")}
        />
      </div>
      <MainFooter />
    </div>
  );
};

export default BankDetailScreen;
