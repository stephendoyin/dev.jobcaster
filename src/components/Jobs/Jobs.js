import React from "react";
import JobList from "./JobList";

function Jobs() {
  return (
    <section className="container" style={{ padding: " 70px 0 100px 0" }}>
      <h2 className="title section-title" style={{ marginBottom: "30px" }}>
        Recent jobs
      </h2>
      <JobList />
      <div className="row">
        <div className="col-12 text-center pt-4">
          <button className="btn btn-large">Show All Jobs</button>
        </div>
      </div>
    </section>
  );
}

export default Jobs;
