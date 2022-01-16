import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../features/slices/memberSlice";

import "../../css/members/loginScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";
import InputBar from "../common/inputBar";

const LoginScreen = () => {
  const [userEmail, setEmail] = useState(null);
  const [userPw, setPw] = useState(null);
  const reqStatus = useSelector((state) => state.member.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (reqStatus === "success") {
      navigate("/bank");
    } else if (reqStatus === "error") {
      alert("로그인에 실패했습니다.");
    }
  }, [reqStatus, navigate]);

  const getUserLogin = () => {
    if (!userEmail) {
      alert("아이디를 입력해주세요");
    } else if (!userPw) {
      alert("비밀번호를 입력해주세요");
    } else {
      dispatch(userLogin({ userEmail, userPw }));
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
