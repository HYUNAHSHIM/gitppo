import React from "react";
import "./index.css";
import head from "./head.png";
import { Doughnut } from 'react-chartjs-2';
import { data } from "./data.js";
import GitImage from "./github.png";
import Pdf from "react-to-pdf";

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

function Repo({ repo }) {
    return (
        <div class="project">
            <div class="flex">
                <div class="repo">
                    <h3>{repo.title}</h3>
                    <h6>{repo.description}</h6>
                    <span class="tempbtn">C</span>
                    <span class="tempbtn">Java</span>
                    <span class="tempbtn">JavaScript</span>
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
            <div class="box">
                <div class="content">
                    <div class="flex">
                        <img src={head} id="head"></img>
                        <div class="intro">
                            <h2>안녕하세요! 개발자 하마입니다.</h2>
                            <h5>저는... 자기소개 중이에요 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세 무궁화 삼천리 화려강산</h5>
                            http://github.com/000 | http://facebook/000 | http://tistory.com/000
                        </div>
                    </div>
                    <div class="school">
                        <div class="flex">
                            <h4>학력</h4>
                            <hr></hr>
                            <div class="s1">2013.03~2016.02</div>
                            <div class="s2">2013.03~2016.02</div>
                            <div class="s3">2013.03~2016.02</div>
                        </div>
                    </div>
                    <div class="career">
                        <div class="flex">
                            <h4>경력</h4>
                            <hr></hr>
                            <div class="c1">2013.03~2016.02</div>
                            <div class="c2">2013.03~2016.02</div>
                            <div class="c3">2013.03~2016.02</div>
                            <div class="c4">2013.03~2016.02</div>
                            <div class="c5">2013.03~2016.02</div>
                        </div>
                    </div>
                    <div style={{width: "100%", height:"1px", margin: "30px 0px", background: "#eee"}}></div>
                    <div class="flex">
                        <div class="field">
                            <h4>기술분야</h4>
                            <Doughnut data={data2} />
                        </div>
                        <div class="stack">
                            <h4>기술스택</h4>
                            <Doughnut data={data3} />
                        </div>
                        <div class="lang">
                            <h4>사용언어</h4>
                            <Doughnut data={langu} />
                        </div>
                    </div>
                    <div style={{width: "100%", height:"1px", margin: "30px 0px", background: "#eee"}}></div>
                    <div class="flex">
                        <div class="cert">
                            <h4>자격증</h4>
                            정보처리기능사 2급 2020.06.14 한국산업인력공단<br></br>
                            IIQ OA MASTER 2018.06.03 한국생산성본부<br></br>
                            컴퓨터활용능력 3급 2017.02.02 대한상공회의소
                        </div>
                        <div class="foreign">
                            <h4>어학능력</h4>
                            TOEIC 900점 2020.06.14<br></br>
                            HSK 47급 2018.06.03<br></br>
                        </div>
                    </div>
                    <div style={{width: "100%", height:"1px", margin: "30px 0px", background: "#eee"}}></div>
                    <div id="repo">
                        {data.map(data => <Repo repo={data} />)}
                    </div>
                    <div style={{width: "100%", height:"1px", margin: "30px 0px", background: "#eee"}}></div>
                    <div id="story">
                        <h4>Story</h4>
                        <div class="story">
                            <h5>000 회사</h5>
                                저는 000 회사에서 이랬고
                            </div>
                        <div class="story">
                            <h5>*** 회사</h5>
                                *** 회사에서는 저랬고
                            </div>
                        <div class="story">
                            <h5>## 회사</h5>
                                ## 회사에서는 이랬습니다~~~~~~
                            </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

function result() {
    return (
        <div style={{padding: "40px"}}>
            <div className="result">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h4 style={{margin: "10px 0px 30px 0px", fontSize:"1.4em", fontWeight: "600", padding: "4px 10px", borderLeft: "6px solid #444"}}>포트폴리오 완성</h4>
                    
                    <Pdf targetRef={ref} filename="포트폴리오.pdf" x={-40} scale={0.6}>
                        {({ toPdf }) => <button className="nextButton" onClick={toPdf}>추출하기</button>}
                    </Pdf>
                </div>
            </div>
            { preview()}
        </div >
    );
}

export default result;