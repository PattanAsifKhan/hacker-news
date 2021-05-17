import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="page-footer">
      <div className="first-row">
        <a>Guidelines</a>
        <a>FAQ</a>
        <a>List</a>
        <a>API</a>
        <a>Security</a>
        <a>Legal</a>
        <a>Apply to YC</a>
        <a>Contact</a>
      </div>
      <div className="second-row">
        <label>Search</label>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default Footer;
