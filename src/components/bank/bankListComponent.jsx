import { React } from "react";

import "../../css/bank/bankListComponent.css";

import BankListEntry from "./bankListEntry";

const BankListComponent = ({ listData }) => {
  return (
    <div className="bankListComponentContainer">
      {listData.map((element) => (
        <BankListEntry data={element} key={element.id} />
      ))}
    </div>
  );
};

export default BankListComponent;
