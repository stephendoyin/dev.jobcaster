import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="container">
      <div className="HeaderWrapper d-flex align-items-center">
        <div className="d-flex align-items-end">
          <h1 className="HeaderText mb-0">Creative jobs</h1>

          <p className="HeaderLeader mb-0">
            Discover your next career move, freelance gig, or internship
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
