import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLoginApi } from "../../features/api/userApi";

import "../../css/members/loginScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";
import InputBar from "../common/inputBar";

const LoginScreen = () => {
  const [userEmail, setEmail] = useState(null);
  const [userPw, setPw] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) navigate("/bank");
  });

  useEffect(() => {
    const keyPressListener = async (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        await getUserLogin();
      }
    };
    document.addEventListener("keydown", keyPressListener);
    return () => {
      document.removeEventListener("keydown", keyPressListener);
    };
  });

  const getUserLogin = async () => {
    if (!userEmail) {
      alert("아이디를 입력해주세요");
    } else if (!userPw) {
      alert("비밀번호를 입력해주세요");
    } else {
      const loginResult = await userLoginApi({ userEmail, userPw });
      if (loginResult.result === "success") {
        const { token } = loginResult.data;
        localStorage.setItem("authToken", token);
        navigate("/bank");
      } else {
        alert("로그인에 실패했습니다");
      }
    }
  };

  return (
    <div className="loginScreenContainer">
      <MainHeader />
      <div className="loginBodyArea">
        <div className="loginBoxArea">
          <InputBar placeHolder={"아이디 (이메일 주소)"} onChange={setEmail} />
          <InputBar
            placeHolder={"비밀번호"}
            isPassword={true}
            onChange={setPw}
          />
        </div>
        <PrimaryButton buttonText={"로그인"} onClick={() => getUserLogin()} />
        <div className="joinLinkText">
          처음 오셨나요?&nbsp;
          <a href="" onClick={() => navigate("/join")}>
            회원가입
          </a>
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default LoginScreen;
