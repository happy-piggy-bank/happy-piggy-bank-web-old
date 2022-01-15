import { React } from "react";
import { useNavigate } from "react-router-dom";

import "../../css/members/myPageScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";
import InputBar from "../common/inputBar";

const MyPageScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="myPageContainer">
      <MainHeader />
      <div className="myPageBodyArea">
        <div className="myPageBoxArea"></div>
        <PrimaryButton buttonText={"수정하기"} onClick={() => {}} />
        <PrimaryButton
          buttonText={"돌아가기"}
          onClick={() => navigate("/bank")}
        />
        <div className="memberLeave">회원 탈퇴</div>
      </div>
      <MainFooter />
    </div>
  );
};

export default MyPageScreen;
