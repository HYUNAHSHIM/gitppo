import React from "react";
import "./index.css";
import head from "./head.png";
import { Doughnut } from 'react-chartjs-2';
import { data } from "./data.js";
import GitImage from "./github.png";
import domtoimage from "dom-to-image";
import jsPDF from 'jspdf';

const ref = React.createRef();

const langu = {
    labels: [
        'Java',
        'C',
        'C++'
    ],
    datasets: [{
        data: [50, 25, 25],
        backgroundColor: [
            '#FFDF3E',
            '#C1C1C1',
            '#616161'
        ]
    }]
};

const data3 = {
    labels: [
        'Java',
        'Kotlin',
        'TypeScript'
    ],
    datasets: [{
        data: [15, 75, 10],
        backgroundColor: [
            '#FFDF3E',
            '#C1C1C1',
            '#616161'
        ]
    }]
};

const options = {
    responsive: false,
}

const style = {
    position: "relative",
    height: "130px"
}

function Repo({ repo }) {
    return (
        <div className="project">
            <div className="flex">
                <div className="repo">
                    <h3>{repo.title}</h3>
                    <h6>{repo.description}</h6>
                    <span className="tempbtn">C</span>
                    <span className="tempbtn">Java</span>
                    <span className="tempbtn">JavaScript</span>
                </div >
            </div>
        </div>
    )
}

function preview() {
    return (
        <div ref={ref}>
            <div id="box">
                <div className="content">
                    <div className="profile">
                        <div className="img">
                            <img src={head} id="head"></img>
                        </div>
                        <div className="info">
                            <br></br>
                            <div className="slogan"><h4>안녕하세요! 개발자 하마입니다.</h4></div>
                            <div className="name">
                                <h1>김하마</h1>
                            </div>
                            <div className="birth">
                                <h5>1999.10.04</h5>
                            </div>
                            <div className="sns">http://github.com/000</div><br></br>
                        </div>
                    </div>
                    <div className="school">
                        <div className="flex">
                            <h4>학력</h4>
                            <hr></hr>
                            <div className="s1">2013.03~2016.02</div>
                            <div className="s2">2013.03~2016.02</div>
                            <div className="s3">2013.03~2016.02</div>
                        </div>
                    </div>
                    <div className="career">
                        <div className="flex">
                            <h4>경력</h4>
                            <hr></hr>
                            <div className="c1">2013.03~2016.02</div>
                            <div className="c2">2013.03~2016.02</div>
                            <div className="c3">2013.03~2016.02</div>
                            <div className="c4">2013.03~2016.02</div>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "1px", margin: "30px 0px", background: "#eee" }}></div>
                    <div className="flex">
                        <div class="stack">
                            <h4>기술스택</h4>
                            <Doughnut data={data3} options={options} style={style} />
                        </div>
                        <div class="lang">
                            <h4>사용언어</h4>
                            <Doughnut data={langu} options={options} style={style} />
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "1px", margin: "30px 0px", background: "#eee" }}></div>
                    <div id="repo">
                        {data.map(data => <Repo repo={data} />)}
                    </div>
                    <div id="story">
                        <h4>Story</h4>
                        <div className="story">
                            <h5>000 회사</h5>
                                저는 000 회사에서 이랬고
                            </div>
                        <div className="story">
                            <h5>*** 회사</h5>
                                *** 회사에서는 저랬고
                            </div>
                        <div className="story">
                            <h5>## 회사</h5>
                                ## 회사에서는 이랬습니다~~~~~~
                            </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function toPdf() {
    const input = document.getElementById('box');
    const pdf = new jsPDF('p', 'mm');
    var width = pdf.internal.pageSize.getWidth();
    var height = pdf.internal.pageSize.getHeight();
    console.log(width, height);
    if (pdf) {
        domtoimage.toPng(input, {
            bgcolor: 'white',
            width: 1450,
        }).then(
            imgData => {
                pdf.addImage(imgData, 'PNG', 0, 0, width, height - 10);
                pdf.save('portfolio.pdf');
            })
    }
}


function result() {
    return (
        <div style={{ padding: "40px" }}>
            <div className="result">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ margin: "10px 0px 30px 0px", fontSize: "1.4em", fontWeight: "600", padding: "4px 10px", borderLeft: "6px solid #444" }}>포트폴리오 완성</h4>
                    <button className="nextButton" onClick={toPdf}>추출하기</button>
                </div>
            </div>
            {preview()}
        </div >
    );
}
export default result;