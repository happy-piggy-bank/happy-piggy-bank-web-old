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
        <div className="myPageBoxArea">
          <div className="myPageUserEmailArea">
            <div className="myUserInfoLabel">아이디</div>
            <div className="myUserInfoContent">abc@test.com</div>
          </div>
          <div className="myPageUserNameArea">
            <div className="myUserInfoLabel">이름</div>
            <div className="myUserInfoContent">김뷰엘</div>
          </div>
          <div className="myPageUserPwArea">
            <div className="myUserInfoLabel">비밀번호 변경</div>
            <InputBar
              placeHolder={"새 비밀번호"}
              isPassword={true}
              onChange={() => {}}
            />
            <InputBar
              placeHolder={"비밀번호 확인"}
              isPassword={true}
              onChange={() => {}}
            />
          </div>
        </div>
        <PrimaryButton buttonText={"변경하기"} onClick={() => {}} />
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
