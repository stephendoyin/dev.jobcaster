import React from "react";
import "./Hero.scss";
import searchIcon from "../../Images/magnifier.svg";
import CustomSelect from "../CustomSelect/CustomSelect";

function Hero() {
  return (
    <div className="Hero position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="HeroSearch position-absolute d-flex align-items-center">
              <img src={searchIcon} className="HeroSearchIcon" alt="search" />
              <input
                placeholder="Search jobs by title or keyword"
                className="HeroInput"
              />
              <div className="d-flex align-items-center justify-content-between HeroSelectContainer">
                <CustomSelect />
                <button className="HeroSubmitBtn text-white">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
