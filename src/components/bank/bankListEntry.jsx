import { React } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { numberWithCommas } from "../../features/utils";

import "../../css/bank/bankListEntry.css";

import entryHeaderImg from "../../images/pig_illustration.png";
import piggyBankImg from "../../images/piggy_bank.png";

const BankListEntry = ({ data }) => {
  const navigate = useNavigate();

  const BankListEntryImage = () => {
    return (
      <div className="bankListEntryImage">
        {data.contentsImg ? (
          <img src={data.contentsImg} />
        ) : (
          <img src={piggyBankImg} width="100px" />
        )}
      </div>
    );
  };

  return (
    <div className="bankListEntryContainer">
      <img className="bankListEntryHeadImg" src={entryHeaderImg} />
      <button className="bankListEntryDeleteButton">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div
        className="bankListEntryContentArea"
        onClick={() => navigate(`/bank/${data.id}`)}
      >
        <BankListEntryImage />
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
