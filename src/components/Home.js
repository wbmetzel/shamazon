import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return(
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="background banner"
        />

        <div className="home_row">
          <Product
            title="The Portable Henry Rollins"
            price={22.00}
            image="https://m.media-amazon.com/images/I/51nLZyNtB4L.jpg"
            rating={5}/>
          <Product />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Fitbit Charge 3 Advanced Fitness Tracker with Heart Rate, Swim Tracking & 7 Day Battery - Graphite/Black, One Size"
            price={182.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={2} />
          <Product
            id="23445930"
            title="Aqueon LED MiniBow Aquarium Kit with SmartClean Technology"
            price={44.99}
            image="https://m.media-amazon.com/images/I/91EpcVDvJwL._AC_SL1500_.jpg"
            rating={4} />
          <Product
            id="3254354345"
            title="2021 Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (5th Generation)"
            price={1039.57}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3} />
        </div>

        <div className="home_row">
          <Product
            id="54215642"
            title="MXR M108S Ten Band EQ Guitar Effects Pedal"
            price={129.99}
            image="https://m.media-amazon.com/images/I/91Akf-sJg7L._AC_SL1500_.jpg"
            rating={5} />
        </div>
      </div>
    </div>
  );
}

export default Home;
