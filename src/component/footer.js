import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const footerStyle = {
    padding: "10px",
    textAlign: "center",
    borderTop: "1px solid #ccc"
};

function footer() {
    return (
        <div style={footerStyle}>
            <div style={{fontSize: "1.2em", fontFamily: "notosans_bold"}}>Gitppo</div>
            <div>Copyright &copy; 2021 designed by Gitppo</div>
            <a href="https://github.com/HYUNAHSHIM/gitppo" target="_blank" title="git page">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );
}

export default footer;