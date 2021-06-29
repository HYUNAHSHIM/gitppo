import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";

const infoStyle = {
    margin: "40px"
};

const contentStyle = {
    fontFamily: "notosans_bold",
    fontSize: "1.1em",
    margin: "40px 0px"
}; 

const inputStyle = {
    width: "200px",
    outline: "none",
    borderTop: "1px",
    borderLeft: "1px",
    borderRight: "1px",
    margin: "20px",
    fontSize: "0.9em",
    fontFamily: "notosans_normal"
};

const detailStyle1 = {
    width: "500px",
    height: "60px",
    marginTop: "-45px",
    marginLeft: "58px"
}

const detailStyle2 = {
    width: "500px",
    height: "200px",
    marginTop: "-45px",
    marginLeft: "58px"
};

const detailStyle3 = {
    width: "800px",
    height: "200px",
    marginTop: "-45px",
    marginLeft: "58px"
};

function info() {
    return (
        <div className="info" style={infoStyle}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h4 style={{margin: "10px 0px 30px 0px", fontSize:"1.4em", fontWeight: "600", padding: "4px 10px", borderLeft: "6px solid #444"}}>추가 내용 입력</h4>
                <Link to="/result"><Button className="nextButton">저장하기</Button></Link>
            </div>
            <div style={contentStyle}>이름
                <div style={detailStyle1}>
                    <input style={inputStyle}></input>
                </div>
            </div>
            <div style={contentStyle}>생년월일
                <div style={detailStyle1}>
                    <input style={inputStyle}></input>
                </div>
            </div>
            <div style={contentStyle}>학력
                <div style={detailStyle2}>
                    <input style={inputStyle} placeholder="고등학교"></input><input style={inputStyle} placeholder="한양고등학교"></input>
                    <input style={inputStyle} placeholder="대학교"></input><input style={inputStyle} placeholder="한양대학교"></input>
                    <input style={inputStyle} placeholder="대학원"></input><input style={inputStyle} placeholder="한양대학원"></input>
                </div>
            </div>
            <div style={contentStyle}>기술
                <div style={detailStyle2}>
                    <input style={inputStyle} placeholder="C++"></input><input style={inputStyle} placeholder="초급"></input>
                    <input style={inputStyle} placeholder="Python"></input><input style={inputStyle} placeholder="초급"></input>
                    <input style={inputStyle} placeholder="Java"></input><input style={inputStyle} placeholder="초급"></input>
                </div>
            </div>
            <div style={contentStyle}>경력
                <div style={detailStyle3}>
                    <input style={inputStyle} placeholder="회사명"></input><input style={inputStyle} placeholder="2021.00.00 ~ 2021.00.00"></input><input style={inputStyle} placeholder="업무 내용"></input>
                    <input style={inputStyle} placeholder="회사명"></input><input style={inputStyle} placeholder="2021.00.00 ~ 2021.00.00"></input><input style={inputStyle} placeholder="업무 내용"></input>
                    <input style={inputStyle} placeholder="회사명"></input><input style={inputStyle} placeholder="2021.00.00 ~ 2021.00.00"></input><input style={inputStyle} placeholder="업무 내용"></input>
                </div>
            </div>
        </div>
    );
}
export default info;