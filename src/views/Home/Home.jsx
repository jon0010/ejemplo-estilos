import React from "react";
import Navbar from "../../assets/components/Navbar";
import StickyFooter from "../../assets/components/Footer";
import "./home.css";

function Home() {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        {" "}
        <div className="col-md-4 col-sm-12">
          {" "}
          <h1 className="titulo text-end text-uppercase mt-5">
            hola mundo esta es la home
          </h1>
        </div>
        <div className="col-8 text-start mt-5">
          <h2>hola</h2>
        </div>
      </div>
      <StickyFooter />
    </div>
  );
}

export default Home;
