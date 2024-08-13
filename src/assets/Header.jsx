import React from "react";
import "src/App.css";
import "src/assets/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="Form-input" id="form-input">
        <input
          type="search"
          placeholder="Enter a city.."
          required
          className="Form-search"
          id="form-search"
        />
        <input
          type="submit"
          value="Search"
          className="Form-submit"
          id="form-submit"
        />
      </form>
    </div>
  );
}