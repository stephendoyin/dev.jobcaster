import React from "react";
import gt from "../../Images/Brands/gt.png";
import airtel from "../../Images/Brands/airtel.png";
import eco from "../../Images/Brands/Eco.png";
import inter from "../../Images/Brands/inter.png";
import opera from "../../Images/Brands/opera.png";
import paystack from "../../Images/Brands/paystack.png";

function Brands() {
  return (
    <section className="container" style={{ padding: " 120px 0 90px 0" }}>
      <h2 className="title section-title" style={{ marginBottom: "90px" }}>
        Companies that trust us
      </h2>
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <img src={opera} alt="logo" />
        <img src={eco} alt="logo" />
        <img src={paystack} alt="logo" />
        <img src={airtel} alt="logo" />
        <img src={inter} alt="logo" />
        <img src={gt} alt="logo" />
      </div>
    </section>
  );
}

export default Brands;
