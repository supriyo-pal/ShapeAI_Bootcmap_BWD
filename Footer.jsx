import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currYear} by Supriyo Pal</p>
    </footer>
  );
}

export default Footer;
