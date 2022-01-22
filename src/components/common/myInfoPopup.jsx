import { React } from "react";
import { useNavigate } from "react-router-dom";
import { userLogoutApi } from "../../features/api/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import PrimaryButton from "./primaryButton";

const MyInfoPopup = ({ setPopupOpen }) => {
  const navigate = useNavigate();

  const userLogout = async () => {
    const authToken = localStorage.getItem("authToken");
    const logoutResult = await userLogoutApi({ token: authToken });
    if (logoutResult.result === "success") {
      localStorage.removeItem("userNum");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("authToken");
      navigate("/");
    } else {
      alert("로그아웃 실패");
    }
  };

  return (
    <div className="myInfoPopup">
      <div className="myInfoPopupInner">
        <button
          className="myInfoPopupCloseButton"
          onClick={() => setPopupOpen(false)}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <PrimaryButton
          buttonText={"내 정보 수정"}
          onClick={() => navigate("/myPage")}
        />
        <PrimaryButton buttonText={"로그아웃"} onClick={() => userLogout()} />
        <div className="myInfoPopupEmail">
          <a href="mailto:dokdo2005@gmail.com?subject=[나의 행복한 돼지 저금통] 버그 제보 및 건의">
            버그 제보 및 건의
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyInfoPopup;
