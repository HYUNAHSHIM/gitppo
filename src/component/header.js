import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";

const headerStyle = {
    display: "flex", 
    justifyContent: "space-between",
    alignItems: "center", 
    padding: "13px 30px",
    borderBottom: "1px solid #ccc",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
};

const logoStyle = {
    fontFamily: "ebs_sb",
    fontSize: "1.5em"
};

const subtitleStyle = {
    color: "#aaa",
};

const pathStyle = {
    width: "200px"
}
const circleStyle1 = {
    fill: "#1b1f23", cursor: "pointer"
}
const circleStyle2 = {
    fill: "#ccc", cursor: "pointer"
}

function Header() {
    const history = useHistory();
    const [styleArr, setStyleArr] = useState([]);

    useEffect(() => {
        const path = history.location.pathname;
        if(path === "/git") setStyleArr([pathStyle, circleStyle1, circleStyle2, circleStyle2]);
        else if(path === "/info") setStyleArr([pathStyle, circleStyle2, circleStyle1, circleStyle2]);
        else if(path === "/result") setStyleArr([pathStyle, circleStyle2, circleStyle2, circleStyle1]);
        else setStyleArr([{...pathStyle, display: "none"}, circleStyle2, circleStyle2, circleStyle1]);
    }, [history.location.pathname]);

    return (
        <div style={headerStyle}>
            <Link to="/"><div style={logoStyle}>Gitppo</div></Link>
            <div style={subtitleStyle}>Portfolio for software developers</div>

            {/* 진행 상황 */}
            <div style={styleArr[0] || {display: "none"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.46 22.06">
                    <path style={{fill: "#ccc"}}
                          d="M303,104.09a11,11,0,0,0-7.62,3.07c-1.26,1.2-3,4.39-4.62,4.39H216.25c-1.64,0-4-3-5.11-4.12a11,11,0,0,0-15.24-.52c-1.39,1.24-3.9,4.64-5.37,4.64H117c-1.33,0-3.86-2-4.49-2.9a11,11,0,1,0-8.93,17.51,10.46,10.46,0,0,0,9-4.54c.54-.82,3.42-2.92,4.55-2.92h73.44c1.47,0,4,3.44,5.43,4.7a11,11,0,0,0,15.18-.57c1.13-1.16,3.47-4.13,5.11-4.13h74.3c1.7,0,3.64,3.36,5,4.6a10.91,10.91,0,0,0,7.39,2.86,11,11,0,0,0,0-22.07Z"
                          transform="translate(-92.52 -104.09)"/>

                    <circle style={styleArr[1] || {display: "none"}}
                            onClick={() => history.push("/git")}
                            cx="11.02" cy="11.03" r="9.07"/>
                    <circle style={styleArr[2] || {display: "none"}}
                            onClick={() => {
                                if (history.location.pathname === "/result")
                                    history.push("/info");
                            }}
                            cx="110.69" cy="11.03" r="9.07"/>
                    <circle style={styleArr[3] || {display: "none"}}
                            cx="210.36" cy="11.03" r="9.07"/>

                    <path style={{fill: "white"}}
                          d="M103.28,111.7l-1.46.32v-.61l1.94-.9h.58v8.24h-1.06Z"
                          transform="translate(-92.52 -104.09)"/>
                    <path style={{fill: "white"}}
                          d="M200.42,118.08l1.84-1.92c1.14-1.19,1.93-2.1,1.93-3.22s-.5-1.55-1.63-1.55a3.34,3.34,0,0,0-1.78.63l-.26-.81a4.23,4.23,0,0,1,2.25-.72,2.23,2.23,0,0,1,2.54,2.34c0,1.41-.92,2.44-2.24,3.77l-1.2,1.22h3.6v.88h-5.05Z"
                          transform="translate(-92.52 -104.09)"/>
                    <path style={{fill: "white"}}
                          d="M300.7,118.25l.21-.82a3.81,3.81,0,0,0,1.86.53c1.28,0,2-.56,2-1.56s-.75-1.46-1.94-1.46h-.78v-.88h.71c1,0,1.71-.51,1.71-1.38s-.62-1.29-1.58-1.29a3.65,3.65,0,0,0-1.76.55l-.16-.84a4.67,4.67,0,0,1,2.15-.6c1.46,0,2.44.73,2.44,2A2,2,0,0,1,304,114.4a1.93,1.93,0,0,1,1.81,2c0,1.43-1.14,2.4-2.94,2.4A4.12,4.12,0,0,1,300.7,118.25Z"
                          transform="translate(-92.52 -104.09)"/>
                </svg>
            </div>
        </div>
    );
}

export default Header;