import React from "react";
import "./CustomSelect.scss";
import pinIcon from "../../Images/pin.svg";
import arrDown from "../../Images/arr-down.svg";

function CustomSelect() {
  return (
    <div className="d-flex align-items-center justify-content-between CustomSelect">
      <label className="m-0" htmlFor="location">
        <img src={pinIcon} alt="location" className="locationIcon" />
        City or area
      </label>
      <div
        id="location"
        className="d-flex align-items-center"
        style={{ height: "100%" }}
      >
        Nigeria
        <img src={arrDown} alt="arrow" className="ArrDownIcon" />
      </div>
    </div>
  );
}

export default CustomSelect;
