import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { numberWithCommas } from "../../features/utils";
import { deleteBankEntry } from "../../features/slices/bankSlice";

import "../../css/bank/bankListEntry.css";

import entryHeaderImg from "../../images/pig_illustration.png";
import piggyBankImg from "../../images/piggy_bank.png";

const BankListEntry = ({ data }) => {
  const reqStatus = useSelector((state) => state.bank.deleteStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (reqStatus === "error") {
      alert("삭제에 실패하였습니다");
    }
  }, [reqStatus]);

  const getDeleteBank = () => {
    if (window.confirm("정말로 삭제하시겠어요?")) {
      const authToken = localStorage.getItem("authToken");
      if (!authToken) {
        alert("로그인을 해주세요!");
        navigate("/login");
      } else {
        dispatch(deleteBankEntry({ token: authToken, bankId: data.id }));
        alert("삭제가 완료되었습니다");
        window.location.reload();
      }
    }
  };

  return (
    <div className="bankListEntryContainer">
      <img className="bankListEntryHeadImg" src={entryHeaderImg} />
      <button
        className="bankListEntryDeleteButton"
        onClick={() => getDeleteBank()}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div
        className="bankListEntryContentArea"
        onClick={() => navigate(`/bank/${data.id}`)}
      >
        <div className="bankListEntryImage">
          {data.contentsImg ? (
            <img src={data.contentsImg} />
          ) : (
            <img src={piggyBankImg} width="100px" />
          )}
        </div>
        <div className="bankListEntryTextArea">
          <p>
            <FontAwesomeIcon icon={faCoins} />
            &nbsp;{numberWithCommas(data.bankAmount)}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;{data.regDt.split("T")[0]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankListEntry;
