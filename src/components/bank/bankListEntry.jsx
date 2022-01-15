import { React } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoins,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import "../../css/bank/bankListEntry.css";

import entryHeaderImg from "../../images/pig_illustration.png";
import piggyBankImg from "../../images/piggy_bank.png";

const BankListEntry = () => {
  const navigate = useNavigate();

  const BankListEntryImage = () => {
    return (
      <div className="bankListEntryImage">
        <img src={piggyBankImg} width="100px" />
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
        onClick={() => navigate("/bank/1")}
      >
        <BankListEntryImage />
        <div className="bankListEntryTextArea">
          <p>
            <FontAwesomeIcon icon={faCoins} />
            &nbsp;1,000
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} />
            &nbsp;2022-01-12
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankListEntry;
