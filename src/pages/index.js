import React from "react";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Jobs from "../components/Jobs/Jobs";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Brands />
      <Jobs />
      <Footer />
    </div>
  );
}

export default Home;
