import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getThisYearBankList,
  clearBankList,
} from "../../features/slices/bankSlice";
import { getUserApi } from "../../features/api/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { numberWithCommas } from "../../features/utils";

import "../../css/bank/bankListScreen.css";
import noBankListImg from "../../images/no_bank_data.png";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";
import PrimaryButton from "../common/primaryButton";
import MyInfoButton from "../common/myInfoButton";
import MyInfoPopup from "../common/myInfoPopup";

import BankListComponent from "./bankListComponent";

const BankListScreen = () => {
  const [userName, setUserName] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const reqStatus = useSelector((state) => state.bank.status);
  const reqError = useSelector((state) => state.bank.error);
  const bankStats = useSelector((state) => state.bank.statistics);
  const bankList = useSelector((state) => state.bank.data);
  const isListEnd = useSelector((state) => state.bank.isListEnd);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    } else {
      await getUserInfo();
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

  const getUserInfo = async () => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    } else {
      const userInfoResult = await getUserApi({ token: authToken });
      if (userInfoResult.result === "success") {
        setUserName(userInfoResult.data.userName);
      } else {
        localStorage.removeItem("authToken");
        navigate("/login");
      }
    }
  };

  const getMoreList = async () => {
    if (!isListEnd) {
      const authToken = localStorage.getItem("authToken");
      setCurrentPage(currentPage + 1);
      dispatch(getThisYearBankList({ token: authToken, currentPage }));
    }
  };

  const NoBankList = () => {
    return (
      <div className="noBankListComponentContainer">
        <div className="noBankListBodyArea">
          <div className="noBankListContentArea">
            <div className="bankListDescriptionArea">
              <div className="bankListDescLeft">
                <p>{userName}??? ???????????????!</p>
              </div>
              <div className="bankListDescRight">
                <MyInfoButton onClick={() => setPopupOpen(true)} />
              </div>
            </div>
            <img src={noBankListImg} width="60%" />
            <p>&nbsp;</p>
            <p>?????? ???????????? ?????? ????????? ????????? :(</p>
            <p>&nbsp;</p>
          </div>
          <PrimaryButton
            buttonText={"????????? ?????? ??????"}
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
                {new Date().getFullYear()}?????? {userName}??????
              </p>
              <p>{bankStats.totalCount}?????? ???????????? ????????? ??????</p>
              <p>
                {numberWithCommas(bankStats.totalAmount)}?????? ????????? ???????????????!
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
            <p>?????? ??? ????????????</p>
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
      {isPopupOpen ? <MyInfoPopup setPopupOpen={setPopupOpen} /> : null}
    </div>
  );
};

export default BankListScreen;
