import React from "react";
import {useLocation} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {Doughnut} from 'react-chartjs-2';
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./index.css";

const ref = React.createRef();

const colors = ['#FFDF3E', '#C1C1C1', '#616161', '#756417', '#F7E07B', '#C2A527', '#F7CC91', '#757068', '#C5BCAF'];
const options = {responsive: false,};

function Skill({skill}) {
    let level;
    if (skill.level === "10") level = "초급";
    else if (skill.level === "20") level = "중급";
    else level = "고급";

    return (
      <div style={{display: "flex", padding: "5px 0px", justifyContent: "space-between"}}>
          <div className="tempBtn">{skill.skill}</div>
          <div>{level}</div>
      </div>
    );
}

function Language({ lang }) {
    const language = { lang }.lang;
    const langName = [];
    const langNum = [];
    for (let i = 0; i < Object.keys(language).length; i++) {
        langName.push(Object.keys(language)[i]);
        langNum.push(Object.values(language)[i]);
    }
    const data = {
        labels: langName,
        datasets: [{
            data: langNum,
            backgroundColor: colors,
        }]
    };
    return <Doughnut data={data}
                     options={options}
                     style={{position: "relative", height: "130px"}}/>
}

function Company({ company }) {
    return (
      <div className="story">
          <h5><b>{company.company}</b></h5>
          {company.start} ~ {company.end}
          <p>{company.story}</p>
      </div>
    );
}

function Work({ company }) {
    return (
      <span className="c">
            <div style={{width: "300px", paddingTop: "15px", fontSize: "0.9em"}}>
                {company.start + "~" + company.end}
            </div>
            <div style={{width: "100px", fontWeight: "700"}}>
                {company.company}
            </div>
        </span>
    )
}

function School({ school }) {
    return (
      <span className="c">
            <div style={{width: "100px", paddingTop: "15px"}}>
                <span style={{fontWeight: "700"}}>{school.schoolName}</span>
                <br/>
                <span style={{fontSize: "0.9em"}}>{school.school}</span>
            </div>
        </span>
    )
}

function Repo({ repo }) {
    const keys = Object.keys(repo.languages);
    return (
        <div className="project flex">
            <div className="repo">
            <h3 className="title">{repo.name}</h3>
            <h6>{repo.description}</h6>
            {repo.input.role && (
                <h6><b>역할 | </b>{repo.input.role}</h6>
            )}
            {repo.input.skill && (
                <h6><b>사용 기술 | </b>{repo.input.skill}</h6>
            )}
            {repo.input.skill && (
                <h6><b>구현 내용 | </b>{repo.input.implement}</h6>
            )}
            <br/>
            {keys.map(language => (
                <span className="tempBtn">{language}</span>
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
    console.log(location.state)
    const
        birth = location.state.birth.split('-'),
        companys = location.state.companyList,
        skills = location.state.skillList,
        schools = location.state.schoolList,
        keys = Object.keys(location.state);

    const repos = [];
    const dictLang = {};
    let url = "";

    for (let i = 0; i < 4; i++)
        url += (location.state[0].url.split('/')[i] + "/");

    for (let i = 0; i < keys.length; i++) {
        if (!isNaN(keys[i])) {
            keys[i] = Number(keys[i])
            repos.push(location.state[keys[i]])

            const keyy = Object.keys(location.state[keys[i]].languages)
            const valuee = Object.values(location.state[keys[i]].languages)
            for (let j = 0; j < keyy.length; j++) {
                if (keyy[j] in dictLang) {
                    dictLang[keyy[j]] = valuee[j] + dictLang[keyy[j]];
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
              <div className="content" id="capture">
                  <div className="profile">
                      <div className="img">
                          <img src={location.state.img} id="head" alt={"프로필 사진"}/>
                      </div>
                      <div className="info">
                          <br/>
                          <div className="slogan"><h4>안녕하세요! 개발자 {location.state.name}입니다.</h4></div>
                          <div className="name">
                              <h1>{location.state.name}</h1>
                          </div>
                          <div className="birth">
                              <h5>생년월일 {birth[0].substring(2)}.{birth[1]}.{birth[2]}</h5>
                          </div>
                          <div className="sns">
                            <a href={url}
                            target="_blank"
                            title="git page"
                            rel="noreferrer noopener">
                                <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                            </a>
                          </div>
                          <br/>
                      </div>
                  </div>
                  <div className="school">
                      <div className="flex">
                          <h4>학력</h4>
                          <hr/>
                          <div style={{display: "flex", paddingLeft: "30px", justifyContent: "space-around"}}>
                              {schools.map(school => <School school={school} />)}
                          </div>
                      </div>
                  </div>
                  <div className="career">
                      <div className="flex">
                          <h4>경력</h4>
                          <hr/>
                          <div style={{display: "flex", paddingLeft: "30px", justifyContent: "space-around"}}>
                              {companys && companys.map(company => <Work company={company} />)}
                              {!companys && <span>없음</span>}
                          </div>
                      </div>
                  </div>
                  <div style={{width: "100%", height: "1px", margin: "30px 0px", background: "#eee"}}/>
                  <div className="flex">
                      <div className="stack">
                          <h4 style={{padding: "10px 0px"}}>기술 스택</h4>
                          <div style={{padding: "0px 30px"}}>
                              {skills.map(skill => <Skill skill={skill} />)}
                          </div>
                      </div>
                      <div className="lang">
                          <h4>사용 언어</h4>
                          {langs.map(lang => <Language lang={lang} />)}
                      </div>
                  </div>
                  <div style={{width: "100%", height: "1px", margin: "30px 0px", background: "#eee"}}/>
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
    html2canvas(document.querySelector("#capture")).then(canvas => {
        const doc = new jsPDF('p', 'mm', 'a4');

        const imgData = canvas.toDataURL('image/jpeg');
        const imgWidth = 170; // 이미지 가로 길이(mm) A4 기준
        const pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const margin = 20;

        let heightLeft = imgHeight;
        let position = 0;

        // 첫 페이지 출력
        doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // 한 페이지 이상일 경우 루프 돌면서 출력
        while (heightLeft >= 20) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // 파일 저장
        doc.save('gitppo.pdf');
    });
}

function Result() {
    return (
      <div className="result-container">
          <div className="result">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h4 style={{ margin: "10px 0px 30px 0px", fontSize: "1.4em", fontWeight: "600", padding: "4px 10px", borderLeft: "6px solid #444" }}>
                      포트폴리오 완성
                  </h4>

                  <button className="nextButton"
                          onClick={toPdf}>
                      추출하기
                  </button>
              </div>
          </div>
          <Preview />
      </div >
    );
}
export default Result;