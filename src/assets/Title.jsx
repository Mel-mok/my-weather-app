import React from "react";

import "./Title.css";

export default function Title() {
  return (
    <div>
      <div className="Weather-app-name">
        <div className="Emoji">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            className="Emoji"
          />
        </div>
        <div className="App-name">Weather</div>
      </div>
      <div className="App-slogan">by Melba</div>
    </div>
  );
}
