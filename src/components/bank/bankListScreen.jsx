import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getThisYearBankList,
  clearBankList,
} from "../../features/slices/bankSlice";
import { userLogoutApi } from "../../features/api/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { numberWithCommas } from "../../features/utils";

import "../../css/bank/bankListScreen.css";
import noBankListImg from "../../images/no_bank_data.png";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";
import PrimaryButton from "../common/primaryButton";
import MyInfoButton from "../common/myInfoButton";

import BankListComponent from "./bankListComponent";

const BankListScreen = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const reqStatus = useSelector((state) => state.bank.status);
  const reqError = useSelector((state) => state.bank.error);
  const bankStats = useSelector((state) => state.bank.statistics);
  const bankList = useSelector((state) => state.bank.data);
  const isListEnd = useSelector((state) => state.bank.isListEnd);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    } else {
      dispatch(getThisYearBankList({ token: authToken, currentPage }));
    }
    return dispatch(clearBankList());
  }, []);

  useEffect(() => {
    if (reqStatus === "error") {
      if (reqError === "no_auth_token" || reqError === "invalid_token") {
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    }
  }, [reqStatus, reqError, navigate]);

  const getMoreList = async () => {
    if (!isListEnd) {
      const authToken = localStorage.getItem("authToken");
      setCurrentPage(currentPage + 1);
      dispatch(getThisYearBankList({ token: authToken, currentPage }));
    }
  };

  const userLogout = async () => {
    const authToken = localStorage.getItem("authToken");
    const logoutResult = await userLogoutApi({ token: authToken });
    if (logoutResult.result === "logout_success") {
      localStorage.removeItem("userNum");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("authToken");
      navigate("/");
    } else {
      alert("로그아웃 실패");
    }
  };

  const MyInfoPopup = () => {
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

  const NoBankList = () => {
    return (
      <div className="noBankListComponentContainer">
        <div className="noBankListBodyArea">
          <div className="noBankListContentArea">
            <div className="bankListDescriptionArea">
              <div className="bankListDescLeft">
                <p>{localStorage.getItem("userName")}님 어서오세요!</p>
              </div>
              <div className="bankListDescRight">
                <MyInfoButton onClick={() => setPopupOpen(true)} />
              </div>
            </div>
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
              <p>
                {new Date().getFullYear()}년의{" "}
                {localStorage.getItem("userName")}님은
              </p>
              <p>{bankStats.totalCount}번의 행복했던 순간과 함께</p>
              <p>
                {numberWithCommas(bankStats.totalAmount)}원의 행복을 저금했어요!
              </p>
            </div>
            <div className="bankListDescRight">
              <MyInfoButton onClick={() => setPopupOpen(true)} />
            </div>
          </div>
          <BankListComponent listData={bankList} />
        </div>
        {bankList.length >= 10 && !isListEnd ? (
          <buton
            className="showMoreBankListButton"
            onClick={() => getMoreList()}
          >
            <p>
              <FontAwesomeIcon icon={faPlus} size="2x" />
            </p>
            <p>목록 더 가져오기</p>
          </buton>
        ) : null}
      </div>
    );
  };

  return (
    <div className="bankListScreenContainer">
      <MainHeader />
      {bankList.length > 0 ? (
        <BankList data={bankList} />
      ) : reqStatus === "loading" ? null : (
        <NoBankList />
      )}
      <MainFooter />
      <button className="createBankButton" onClick={() => navigate("/create")}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
      {isPopupOpen ? <MyInfoPopup /> : null}
    </div>
  );
};

export default BankListScreen;
