import React from 'react';
import Axios from "axios";
import Footer from "src/assets/Footer.jsx";

import "src/App.css";
import "src/assets/Title.css";
import "src/assets/Header.css";
import "src/assets/Weather.css";
import "src/assets/Footer.css";

export default function Weather(){
  return (
    <div>
      <main>
        <h1 className="City-name">Tokyo</h1>
        <p className="Weather-app-details">
          <span className="Date">Sat 19:30</span>
          <span className="Condition">broken clouds</span> <br />
          <div className="Container">
            <div className="Humidity-container">
              <div className="Humidity-body"> Humidity: </div>
              <span className="Humidity">85 </span>
              <span>%</span>
            </div>
            <div className="Wind-container">
              <div className="Wind-body">Wind: </div>
              <span className="Wind">9 </span>
              <span>km/h</span>
            </div>
          </div>
        </p>
        <div className="City-temperature-details">
          <div className="Icon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              className="Icon"
            />{" "}
          </div>
          <div className="City-temperature" id="city-temperature">
            20
          </div>
          <div className="Temperature-unit">°C</div>
        </div>

        <div className="Forecast-weather">
          <div className="Row"></div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
