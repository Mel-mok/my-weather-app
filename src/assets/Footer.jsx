import React from "react";
import "src/App.css";
import "src/assets/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <br />
        This app was coded by{" "}
        <a href="https://github.com/Mel-mok" target="_blank">
          Melba Mokoena
        </a>{" "}
        and is on{" "}
        <a
          href="https://github.com/Mel-mok/my-weather-app.git"
          target="_blank"
        >
          Github
        </a>{" "}
        and is hosted on{" "}
        <a href="https://my-weather-app-with-react.netlify.app/" target="_blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}