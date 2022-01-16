import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { numberWithCommas } from "../features/utils";
import { bankTotalStatsApi } from "../features/api/bankApi";

import MainHeader from "./common/mainHeader";
import MainFooter from "./common/mainFooter";
import PrimaryButton from "./common/primaryButton";

import piggyBankImg from "../images/piggy_bank.png";
import "../css/mainScreen.css";

const MainScreen = () => {
  const [mainScreenRoute, setMainScreenRoute] = useState(null);
  const [mainStats, setMainStats] = useState({
    totalUserCount: 0,
    totalBankCount: 0,
    totalBankAmount: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const getStats = await bankTotalStatsApi();
      setMainStats(getStats.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setMainScreenRoute("bank");
    } else {
      setMainScreenRoute("login");
    }
  }, []);

  return (
    <div className="mainScreenContainer">
      <MainHeader />
      <div className="mainBodyArea">
        <div className="mainContentArea">
          <img src={piggyBankImg} width="60%" alt="돼지 저금통" />
          <p>&nbsp;</p>
          <p>{mainStats.totalUserCount}명의 사람들이</p>
          <p>{mainStats.totalBankCount}번의 행복했던 순간과 함께</p>
          <p>
            {numberWithCommas(mainStats.totalBankAmount)}원의 행복을 저금하고
            있어요!
          </p>
          <p>&nbsp;</p>
        </div>
        <PrimaryButton
          buttonText="시작하기"
          onClick={() => navigate(mainScreenRoute)}
        />
      </div>
      <MainFooter />
    </div>
  );
};

export default MainScreen;
