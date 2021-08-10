import React from "react";
import "./index.css";
import head from "./head.png";
import { Doughnut } from 'react-chartjs-2';
import { data } from "./data.js";
import GitImage from "./github.png";
import domtoimage from "dom-to-image";
import jsPDF from 'jspdf';
import $ from 'jquery';
window.$ = $;

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

const data2 = {
    labels: [
        'WEB',
        'ANDROID',
        'IOS'
    ],
    datasets: [{
        data: [30, 14, 56],
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
                <div className="pic">
                    <img src={GitImage} id="repopic"></img>
                    <img src={GitImage} id="repopic"></img>
                </div>
            </div>
        </div>
    )
}

function preview() {
    return (
        <div ref={ref}>
            <div id="box">
                <div className="content">
                    <div className="flex">
                        <img src={head} id="head"></img>
                        <div className="intro">
                            <h2>안녕하세요! 개발자 하마입니다.</h2>
                            <h5>저는... 자기소개 중이에요 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세</h5>
                            http://github.com/000 | http://facebook/000 | http://tistory.com/000
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
                        <div className="field">
                            <h4>기술분야</h4>
                            <Doughnut data={data2} options={options} style={style} />
                        </div>
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
                    <div className="flex">
                        <div className="cert">
                            <h4>자격증</h4>
                            정보처리기능사 2급 2020.06.14 한국산업인력공단<br></br>
                            IIQ OA MASTER 2018.06.03 한국생산성본부<br></br>
                            컴퓨터활용능력 3급 2017.02.02 대한상공회의소<br></br>
                            정보처리기능사 2급 2020.06.14 한국산업인력공단<br></br>
                            IIQ OA MASTER 2018.06.03 한국생산성본부<br></br>
                            컴퓨터활용능력 3급 2017.02.02 대한상공회의소
                        </div>
                        <div className="foreign">
                            <h4>어학능력</h4>
                            TOEIC 900점 2020.06.14<br></br>
                            HSK 47급 2018.06.03<br></br>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "1px", margin: "30px 0px", background: "#eee" }}></div>
                    <div id="repo">
                        {data.map(data => <Repo repo={data} />)}
                    </div>
                    <div style={{ width: "100%", height: "1px", margin: "30px 0px", background: "#eee" }}></div>
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

                    {/* <Pdf targetRef={ref} filename="포트폴리오.pdf" x={-10} y={20} scale={0.6}>
                        {({ toPdf }) => <button className="nextButton" onClick={toPdf}>추출하기</button>}
                    </Pdf> */}
                    <button className="nextButton" onClick={toPdf}>추출하기</button>
                </div>
            </div>
            {preview()}
        </div >
    );
}
export default result;