import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import {
  getBankDetailApi,
  deleteBankEntryApi,
} from "../../features/api/bankApi";
import { numberWithCommas } from "../../features/utils";

import "../../css/bank/bankDetailScreen.css";

import MainHeader from "../common/mainHeader";
import MainFooter from "../common/mainFooter";

import PrimaryButton from "../common/primaryButton";

const BankDetailScreen = () => {
  const [bankDetail, setBankDetail] = useState(null);
  const navigate = useNavigate();
  const { bankId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        navigate("/login");
      } else {
        const fetchResult = await getBankDetailApi({
          token: authToken,
          bankId,
        });
        if (fetchResult.result === "success") {
          setBankDetail(fetchResult.data);
        } else {
          if (fetchResult.result === "record_not_found") {
            alert("해당 내역을 찾을 수 없습니다");
            navigate("/bank");
          } else if (fetchResult.result === "bank_is_not_mine") {
            alert("다른 사람의 내역은 열어볼 수 없어요!");
            navigate("/");
          } else if (fetchResult.result === "not_yet_open") {
            alert("연말에 열어 볼 수 있어요!");
            navigate("/bank");
          } else if (
            fetchResult.result === "no_auth_token" ||
            fetchResult.result === "invalid_token"
          ) {
            localStorage.removeItem("authToken");
            navigate("/login");
          }
        }
      }
    };
    fetchData();
  }, []);

  const deleteBankEntry = async () => {
    if (window.confirm("정말로 삭제하시겠어요?")) {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        navigate("/login");
      } else {
        const fetchResult = await deleteBankEntryApi({
          token: authToken,
          bankId,
        });
        if (fetchResult.result === "bank_delete_success") {
          alert("삭제가 완료되었습니다");
          navigate("/bank");
        } else if (
          fetchResult.result === "no_auth_token" ||
          fetchResult.result === "invalid_token"
        ) {
          localStorage.removeItem("authToken");
          navigate("/login");
        } else {
          alert("삭제에 실패했습니다");
        }
      }
    }
  };

  const BankDetailBody = () => {
    return (
      <>
        <div className="bankDetailBodyArea">
          <div className="bankDetailTitleArea">
            <div className="bankDetailTitle">{bankDetail.bankTitle}</div>
            <div className="bankDetailTitleBottom">
              <div className="bankDetailRegDt">
                <FontAwesomeIcon icon={faCalendarAlt} />
                &nbsp;{bankDetail.regDt.split("T")[0]}
              </div>
              <div className="bankDetailAmount">
                <FontAwesomeIcon icon={faCoins} />
                &nbsp;{numberWithCommas(bankDetail.bankAmount)}
              </div>
            </div>
          </div>
          {bankDetail.contentsImg ? (
            <div className="bankDetailImage">
              <img src={bankDetail.contentsImg} />
            </div>
          ) : (
            <div className="bankDetailNoImage" />
          )}
          <div className="bankDetailContentArea">
            <div className="bankDetailContent">
              {bankDetail.bankContents.split("\n").map((value) => {
                return (
                  <>
                    {value}
                    <br />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <PrimaryButton
          buttonText={"목록으로 돌아가기"}
          onClick={() => navigate("/bank")}
        />
        <PrimaryButton
          buttonText={"삭제하기"}
          onClick={() => deleteBankEntry()}
        />
      </>
    );
  };

  return (
    <div className="bankDetailScreenContainer">
      <MainHeader />
      {bankDetail ? <BankDetailBody /> : null}
      <MainFooter />
    </div>
  );
};

export default BankDetailScreen;
