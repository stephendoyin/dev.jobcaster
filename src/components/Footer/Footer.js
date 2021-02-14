import React from "react";
import "./Footer.scss";
import logo from "../../Images/Logo.png";
import telegram from "../../Images/Social/telegram.svg";
import instagram from "../../Images/Social/instagram.svg";
import facebook from "../../Images/Social/facebook.svg";
import linkedin from "../../Images/Social/linkedin.svg";
import twitter from "../../Images/Social/twitter.svg";

function Footer() {
  return (
    <div className="bg-white border-top">
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center pb-3">
          <img src={logo} alt="logo" />
          <div className="FooterSocialLinks d-flex align-items-center justify-content-between">
            <a href="/#">
              <img src={telegram} alt="telegram" />
            </a>
            <a href="/#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="/#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="/#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="/#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <span className="" style={{ color: "rgba(0,0,0,.6)" }}>
          &copy; 2020 Design Jobcaster. All rights reserved
        </span>
      </div>
      <div className="border-top">
        <div className="container">
          <div className="d-flex justify-content-between FooterLinkContainer align-items-center">
            <div>
              <a href="/#" className="FooterLink d-inline-block">
                About Us
              </a>
              <a href="/#" className="FooterLink d-inline-block">
                Find Jobs
              </a>
              <a href="/#" className="FooterLink d-inline-block">
                Contact us
              </a>
              <a href="/#" className="FooterLink d-inline-block">
                Blog
              </a>
            </div>
            <div>
              <a href="/#" className="FooterLink d-inline-block">
                Privacy
              </a>
              <a
                href="/#"
                className="FooterLink d-inline-block"
                style={{ marginRight: "0" }}
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
