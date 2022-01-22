import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userUpdateApi, userLeaveApi } from "../../features/api/userApi";

import "../../css/members/myPageScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";
import InputBar from "../common/inputBar";

const MyPageScreen = () => {
  const [newPw, setNewPw] = useState(null);
  const [pwCheck, setPwCheck] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
  });

  useEffect(() => {
    const keyPressListener = async (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        await getUserUpdate();
      }
    };
    document.addEventListener("keydown", keyPressListener);
    return () => {
      document.removeEventListener("keydown", keyPressListener);
    };
  });

  const getUserUpdate = async () => {
    if (!newPw) {
      alert("새 비밀번호를 입력해주세요!");
    } else if (!pwCheck) {
      alert("비밀번호 확인 값을 입력해주세요!");
    } else if (newPw !== pwCheck) {
      alert("비밀번호가 같지 않습니다");
    } else {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        navigate("/login");
      } else {
        const updateResult = await userUpdateApi({
          token: authToken,
          userPw: newPw,
        });
        if (updateResult.result === "success") {
          alert("회원 정보 수정이 완료되었습니다");
          navigate("/bank");
        } else {
          if (updateResult.result === "same_password") {
            alert("기존 비밀번호와 동일한 비밀번호입니다");
          } else if (
            updateResult.result === "no_auth_token" ||
            updateResult.result === "invalid_token"
          ) {
            localStorage.removeItem("authToken");
            navigate("/login");
          }
        }
      }
    }
  };

  const getUserLeave = async () => {
    if (window.confirm("정말로 탈퇴하시겠어요?")) {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        navigate("/login");
      } else {
        const leaveResult = await userLeaveApi({ token: authToken });
        if (leaveResult.result === "success") {
          localStorage.removeItem("authToken");
          alert("회원 탈퇴가 완료되었습니다");
          navigate("/");
        } else if (
          leaveResult.result === "no_auth_token" ||
          leaveResult.result === "invalid_token"
        ) {
          localStorage.removeItem("authToken");
          navigate("/login");
        } else {
          alert("회원 탈퇴에 실패하였습니다");
        }
      }
    }
  };

  return (
    <div className="myPageContainer">
      <MainHeader />
      <div className="myPageBodyArea">
        <div className="myPageBoxArea">
          <div className="myPageUserEmailArea">
            <div className="myUserInfoLabel">아이디</div>
            <div className="myUserInfoContent">
              {localStorage.getItem("userEmail")}
            </div>
          </div>
          <div className="myPageUserNameArea">
            <div className="myUserInfoLabel">이름</div>
            <div className="myUserInfoContent">
              {localStorage.getItem("userName")}
            </div>
          </div>
          <div className="myPageUserPwArea">
            <div className="myUserInfoLabel">비밀번호 변경</div>
            <InputBar
              placeHolder={"새 비밀번호"}
              isPassword={true}
              onChange={(value) => setNewPw(value)}
            />
            <InputBar
              placeHolder={"비밀번호 확인"}
              isPassword={true}
              onChange={(value) => setPwCheck(value)}
            />
          </div>
        </div>
        <PrimaryButton
          buttonText={"변경하기"}
          onClick={() => getUserUpdate()}
        />
        <PrimaryButton
          buttonText={"돌아가기"}
          onClick={() => navigate("/bank")}
        />
        <div className="memberLeave" onClick={() => getUserLeave()}>
          회원 탈퇴
        </div>
      </div>
      <MainFooter />
    </div>
  );
};

export default MyPageScreen;
