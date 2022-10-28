import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Pranav with 🔥 ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
