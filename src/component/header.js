import React from "react";
import { Link } from "react-router-dom";

const headerStyle = {
    display: "flex", 
    justifyContent: "space-between",
    alignItems: "center", 
    padding: "13px 30px",
    borderBottom: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
};

const logoStyle = {
    fontFamily: "notosans_bold",
    fontSize: "1.5em"
};

const subtitleStyle = {
    color: "#aaa",
};

function header() {
    return (
        <div style={headerStyle}>
            <Link to="/"><div style={logoStyle}>Gitppo</div></Link>
            <div style={subtitleStyle}>Portfolio for software developers</div>
        </div>
    );
}

export default header;