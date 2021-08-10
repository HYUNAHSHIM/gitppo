import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Birth from "./Calender1";
import School from "./School";
import Skill from "./Skill";
import Career from "./Career";

function User() {
    const [ name, setName ] = useState("");
    
    useEffect(() => {
        console.log({
            name
        });
    });

    const onChangename = e => {
        setName(e.target.value);
    };

    const history = useHistory();
    
    return (
        <div className="info">

            <div className="infoStyle">
                <h4 className="title">추가 내용 입력</h4>
                <Button className="nextButton" 
                onClick={() => history.push("/result")}>저장하기</Button>
            </div>

            <div className="contentStyle">이름
                <div className="detailStyle1">
                    <input className="inputStyle" value={name} onChange={onChangename}/>
                </div>
            </div>

            <div className="contentStyle">생년월일
                <div className="detailStyle1">
                    <Birth/>
                </div>
            </div>

            <div className="contentStyle">학력
                <div className="detailStyle2">
                    <School/>
                </div>
            </div>

            <div className="contentStyle">기술
                <div className="detailStyle2">
                    <Skill/>
                </div>
            </div>   

            <div className="contentStyle">경력
                <div className="detailStyle3">
                    <Career/>
                </div> 
            </div>

        </div> 
    );
};
export default User;