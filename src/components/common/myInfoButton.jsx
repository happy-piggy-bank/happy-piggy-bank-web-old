import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "../../css/common/myInfoButton.css";

const MyInfoButton = ({ onClick }) => {
  return (
    <button className="myInfoButton" onClick={() => onClick()}>
      <FontAwesomeIcon icon={faUser} />
    </button>
  );
};

export default MyInfoButton;
