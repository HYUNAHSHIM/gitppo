import React from "react";
import "./index.css";
import head from "./head.png";
import { Doughnut } from 'react-chartjs-2';
import domtoimage from "dom-to-image";
import jsPDF from 'jspdf';
import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const ref = React.createRef();

const colors = ['#FFDF3E', '#C1C1C1', '#616161', '#756417', '#F7E07B', '#C2A527', '#F7CC91', '#757068', '#C5BCAF'];
const options = {
    responsive: false,
}
const style = {
    position: "relative",
    height: "130px"
}

const skills = [];
const levels = [];

function Skill({ skill }) {
    const skill2 = useLocation().state.skillList;
    skills.push(skill.skill);
    levels.push(skill.level);
    const skillData = {
        labels: skills,
        datasets: [{
            data: levels,
            backgroundColor: colors,
        }],
    };
    if (levels.length == skill2.length) {
        return (
            <Doughnut data={skillData} options={options} style={style} />
        )
    } else {
        return ("")
    }
}

function Language({ lang }) {
    const language = { lang }.lang;
    var langName = [];
    var langNum = [];
    for (let i = 0; i < Object.keys(language).length; i++) {
        langName.push(Object.keys(language)[i]);
        langNum.push(Object.values(language)[i]);
    }
    const langu = {
        labels: langName,
        datasets: [{
            data: langNum,
            backgroundColor: colors,
        }]
    };
    return (
        <Doughnut data={langu} options={options} style={style} />
    )
}

function Company({ company }) {
    return (
        <div className="story">
            <h5><b>{company.company}</b></h5>
            {company.start} ~ {company.end}
            <p>{company.story}</p>
        </div >
    )
}

function Work({ company }) {
    const sdate = company.start.split("-");
    const edate = company.end.split("-");
    const date = sdate[0] + "." + sdate[1] + "-" + edate[0] + "." + edate[1]
    return (
        <div className="c">{date}</div>
    )
}

function School({ school }) {
    const schoolName = school.schoolName;
    return (
        <span className="c">{schoolName}</span>
    )
}

function Repo({ repo }) {
    const keys = Object.keys(repo.languages)
    var langlist = [];
    for (let i = 0; i < keys.length; i++) {
        langlist.push(keys[i])
    }
    return (
        <div className="project flex">
            <div className="repo">
                <h3>{repo.name}</h3>
                <h6>{repo.description}</h6>
                <h6><b>역할 | </b>{repo.input.role}</h6>
                <h6><b>사용 기술 | </b>{repo.input.skill}</h6>
                <h6><b>구현 내용 | </b>{repo.input.implement}</h6>
                <br></br>
                {langlist.map(language => (
                    <span className="tempbtn">{language}</span>
                ))}
            </div >
            <div className="readme">
                <ReactMarkdown children={repo.readme} />
            </div>
        </div >
    )
}

function Preview() {
    const location = useLocation();
    const birth = location.state.birth.split('-');
    const companys = location.state.companyList;
    const skills = location.state.skillList;
    const schools = location.state.schoolList;
    const keys = Object.keys(location.state);
    const repos = [];
    var url = "";
    var dictLang = {};
    for (let i = 0; i < 4; i++) {
        url += (location.state[0].url.split('/')[i] + "/");
    }
    for (let i = 0; i < keys.length; i++) {
        if (!isNaN(keys[i])) {
            keys[i] = Number(keys[i])
            repos.push(location.state[keys[i]])

            const keyy = Object.keys(location.state[keys[i]].languages)
            const valuee = Object.values(location.state[keys[i]].languages)
            for (let j = 0; j < keyy.length; j++) {
                if (keyy[j] in dictLang) {
                    var value = valuee[j] + dictLang[keyy[j]];
                    dictLang[keyy[j]] = value;
                } else {
                    dictLang[keyy[j]] = valuee[j];
                }
            }
        }
    }

    const langs = [dictLang];
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
                            <div className="slogan"><h4>안녕하세요! 개발자 {location.state.name}입니다.</h4></div>
                            <div className="name">
                                <h1>{location.state.name}</h1>
                            </div>
                            <div className="birth">
                                <h5>{birth[0]}.{birth[1]}.{birth[2]}</h5>
                            </div>
                            <div className="sns">{url}</div><br></br>
                        </div>
                    </div>
                    <div className="school">
                        <div className="flex">
                            <h4>학력</h4>
                            <hr></hr>
                            {schools.map(school => <School school={school} />)}
                        </div>
                    </div>
                    <div className="career">
                        <div className="flex">
                            <h4>경력</h4>
                            <hr></hr>
                            {companys.map(company => <Work company={company} />)}
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "1px", margin: "30px 0px", background: "#eee" }}></div>
                    <div className="flex">
                        <div class="stack">
                            <h4>기술스택</h4>
                            {skills.map(skill => <Skill skill={skill} />)}
                        </div>
                        <div class="lang">
                            <h4>사용언어</h4>
                            {langs.map(lang => <Language lang={lang} />)}
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "1px", margin: "30px 0px", background: "#eee" }}></div>
                    <div id="repo">
                        {repos.map(repo => <Repo repo={repo} />)}
                    </div>
                    <div id="story">
                        <h4>Story</h4>
                        {companys.map(company => <Company company={company} />)}
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
    if (pdf) {
        domtoimage.toPng(input, {
            bgcolor: 'white',
            width: input.offsetWidth + 500,
            height: input.offsetHeight + 200,
        }).then(
            imgData => {
                pdf.addImage(imgData, 'PNG', 0, 0, width, height - 10);
                pdf.save('portfolio.pdf');
            })
    }
}



function Result() {
    return (
        <div style={{ padding: "40px" }}>
            <div className="result">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ margin: "10px 0px 30px 0px", fontSize: "1.4em", fontWeight: "600", padding: "4px 10px", borderLeft: "6px solid #444" }}>포트폴리오 완성</h4>
                    <button className="nextButton" onClick={toPdf}>추출하기</button>
                </div>
            </div>
            {Preview()}
        </div >
    );
}
export default Result;