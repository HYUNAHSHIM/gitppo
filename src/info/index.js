import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import "./index.css";
import { Link } from "react-router-dom";

function info() {
    return (
        <div className="info">
            <div className="infoStyle">
                <h4 className="titleStyle">추가 내용 입력</h4>
                <Link to="/result"><Button className="nextButton">저장하기</Button></Link>
            </div>
            <div className="contentStyle">이름
                <div className="detailStyle1">
                    <input className="inputStyle"></input>
                </div>
            </div>
            <div className="contentStyle">생년월일
                <div className="detailStyle1">
                    <input className="inputStyle"></input>
                </div>
            </div>
            <div className="contentStyle">학력
                <div className="detailStyle2">
                    <input className="inputStyle" placeholder="고등학교"></input><input className="inputStyle" placeholder="한양고등학교"></input>
                    <input className="inputStyle" placeholder="대학교"></input><input className="inputStyle" placeholder="한양대학교"></input>
                    <input className="inputStyle" placeholder="대학원"></input><input className="inputStyle" placeholder="한양대학원"></input>
                </div>
            </div>
            <div className="contentStyle">기술
                <div className="detailStyle2">
                    <input className="inputStyle" placeholder="C++"></input><input className="inputStyle" placeholder="초급"></input>
                    <input className="inputStyle" placeholder="Python"></input><input className="inputStyle" placeholder="초급"></input>
                    <input className="inputStyle" placeholder="Java"></input><input className="inputStyle" placeholder="초급"></input>
                </div>
            </div>
            <div className="contentStyle">경력
                <div className="detailStyle3">
                    <input className="inputStyle" placeholder="회사명"></input><input className="inputStyle" placeholder="2021.00.00 ~ 2021.00.00"></input><input className="inputStyle" placeholder="업무 내용"></input>
                    <input className="inputStyle" placeholder="회사명"></input><input className="inputStyle" placeholder="2021.00.00 ~ 2021.00.00"></input><input className="inputStyle" placeholder="업무 내용"></input>
                    <input className="inputStyle" placeholder="회사명"></input><input className="inputStyle" placeholder="2021.00.00 ~ 2021.00.00"></input><input className="inputStyle" placeholder="업무 내용"></input>
                </div>
            </div>
        </div>
    );
}
export default info;
