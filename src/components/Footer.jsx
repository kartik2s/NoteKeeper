import React from "react";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div>
      <footer>Copright reserved at {year}</footer>
    </div>
  );
}

export default Footer;
