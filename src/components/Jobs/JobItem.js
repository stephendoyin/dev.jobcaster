import React from "react";
import "./Jobs.scss";

function JobItem({ data }) {
  return (
    <div className="position-relative col-lg-4 col-md-6 mb-4 col-sm-12 col-xlg-4">
      <div className="JobItemCard ">
        <h4 className="JobItemCardTitle">{data.role}</h4>
        <div className="JobDescription">
          <span>{data.location}</span>
          <span className="dot d-inline-block rounded-circle"></span>
          <span>{data.type}</span>
        </div>

        <div className="position-absolute" style={{ bottom: "40px" }}>
          <div className="d-flex align-items-center">
            <img src={data.img} alt="opera" style={{ maxHeight: "21px" }} />
            <h5 className="title title--small m-0 ml-3">Standard Chartered</h5>
          </div>
          <span className="timestamp mt-3 d-inline-block">
            {data.timestamp}
          </span>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
