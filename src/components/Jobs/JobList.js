import React from "react";
import JobItem from "./JobItem";
import data from "../../data/job";

function JobList() {
  return (
    <>
      <div className="align-items-stretch row">
        {data.map((item) => (
          <JobItem data={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default JobList;
