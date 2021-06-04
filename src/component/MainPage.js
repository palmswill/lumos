import React from "react";
import HouseCard from "./Home/HouseCard";
import Navbar from "./Navbar";
import Shop from "../component/shop/Shop";

const MainPage = () => {
  return (
    <main>
      <div className="home">
        <Navbar />
        <div id="content-box">
          <HouseCard />
          <Shop />
        </div>
      </div>
    </main>
  );
};

export default MainPage;
