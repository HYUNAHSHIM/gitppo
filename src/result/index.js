import React from "react";
import "./index.css";
import head from "./head.png";
import { Doughnut } from 'react-chartjs-2';
import { data } from "./data.js";

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
                    <button class="tempbtn">C</button>
                    <button class="tempbtn">Java</button>
                    <button class="tempbtn">JavaScript</button>
                </div >
                <div class="pic">
                    <img src={repo.image} id="repopic"></img>
                    <img src={repo.image} id="repopic"></img>
                </div>
            </div>
        </div>
    )
}

function preview() {
    return (
        <div id="container">
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
                    <div id="repo">
                        {data.map(data => <Repo repo={data} />)}
                    </div>
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
        <div>
            <div class="topflex">
                <h3 id="top">미리보기</h3>
                <button id="export">추출하기</button>
            </div>
            { preview()}
        </div >
    );
}

export default result;