import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function main() {

    return (
        <div style={{background: "#f6f8fa"}}>
            <div className="main">
                <div className="wrapper">
                    <div className="title">로그인</div>
                    <div className="inputContainer">
                        <div>
                            <input placeholder="아이디"/>
                        </div>
                        <div>
                            <input placeholder="비밀번호" type="password"/>
                        </div>
                    </div>
                    <Link to="/git"><button id="button">확인</button></Link>
                </div>
            </div>
        </div>
        
    );
}

export default main;