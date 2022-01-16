import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userJoinApi } from "../../features/api/userApi";

import "../../css/members/joinScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";
import InputBar from "../common/inputBar";

const JoinScreen = () => {
  const [userEmail, setEmail] = useState(null);
  const [userPw, setPw] = useState(null);
  const [userName, setName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) navigate("/bank");
  });

  const getUserJoin = async () => {
    if (!userEmail) {
      alert("아이디를 입력해주세요");
    } else if (!userPw) {
      alert("비밀번호를 입력해주세요");
    } else if (!userName) {
      alert("사용자 이름을 입력해주세요");
    } else {
      const joinResult = await userJoinApi({ userEmail, userPw, userName });
      if (joinResult.result === "success") {
        const { userNum, userEmail, userName, token } = joinResult.data;
        localStorage.setItem("userNum", userNum);
        localStorage.setItem("userEmail", userEmail);
        localStorage.setItem("userName", userName);
        localStorage.setItem("authToken", token);
        navigate("/bank");
      } else {
        alert("회원가입에 실패했습니다");
      }
    }
  };

  return (
    <div className="joinScreenContainer">
      <MainHeader />
      <div className="joinBodyArea">
        <div className="joinBoxArea">
          <InputBar placeHolder={"아이디 (이메일 주소)"} onChange={setEmail} />
          <InputBar
            placeHolder={"비밀번호"}
            isPassword={true}
            onChange={setPw}
          />
          <InputBar placeHolder={"이름"} onChange={setName} />
        </div>
        <PrimaryButton buttonText={"회원가입"} onClick={() => getUserJoin()} />
        <div className="loginLinkText">
          이미 계정이 있으신가요?&nbsp;
          <a href="" onClick={() => navigate("/login")}>
            로그인
          </a>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default JoinScreen;
