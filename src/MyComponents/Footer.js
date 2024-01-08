import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    // top: "100vh",
    width: "100%"
  }
  return (
    <footer className="FOOTER" style={footerStyle}>
      Copyright &copy; MytodosList.com
    </footer>
  );
};
