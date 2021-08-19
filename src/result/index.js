import React from "react";
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


const Work = ({company}) => (
  <span className="profile-progress-each">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183"><circle cx="91.5" cy="91.5" r="91.5"/></svg>
    <div>{company.start} ~ {company.end}</div>
    <div>{company.name}</div>
    <div>{company.position}</div>
  </span>
);

const School = ({school}) => (
  <span className="profile-progress-each">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183"><circle cx="91.5" cy="91.5" r="91.5"/></svg>
    <div>{school.start} ~ {school.end}</div>
    <div>{school.name}</div>
    <div>{school.type}</div>
  </span>
);

const Language = ({lang}) => (
  <Doughnut style={{position: "relative", height: "150px"}}
            options={options}
            data={{
              labels: Object.keys(lang),
              datasets: [{
                data: Object.values(lang),
                backgroundColor: colors,
              }]
            }}/>
);

const Skill = ({skill}) => (
  <li className={"skill-each"}>
    <span className="skill-each-name">{skill.name}</span>
    <span>{skill.level}</span>
  </li>
);

const Repo = ({repo}) => (
  <li className="project-each">
    <div>
      <p className={"result-subtitle"}>{repo.name}</p>

      <div>{repo.description}</div>
      {repo.input.role && <div><b>역할 | </b>{repo.input.role}</div>}
      {repo.input.skill && <div><b>사용 기술 | </b>{repo.input.skill}</div>}
      {repo.input.implement && <div><b>구현 내용 | </b>{repo.input.implement}</div>}
      <br/>
      {Object.keys(repo.languages).map((language, i) =>
        <span className="skill-each-name" key={i}>{language}</span>
      )}
    </div >

    <div className="project-readme">
      <ReactMarkdown children={repo.readme} />
    </div>
  </li >
);

const Company = ({company}) => (
  <li className={"experience-each"}>
    <span className={"result-subtitle"}>{company.name}</span>
    <span className={"skill-each-name"}>{company.position}</span>
    <span>{company.start} ~ {company.end}</span>
    <span>{company.content}</span>
  </li>
);


function Result({location}) {
  const
    {
      birth, name, profile, user,
      option:{school, skill, company},
      git:repos,
    } = location.state,
    githubUrl = `https://github.com/${user}`,
    languagesDict = {};

  const toPdf = () => {
    html2canvas(document.querySelector("#capture"))
      .then(canvas => {
        const
          doc = new jsPDF('p', 'mm', 'a4'),
          imgData = canvas.toDataURL('image/jpeg'),
          imgWidth = 170,                   // 이미지 가로 길이(mm) A4 기준
          pageHeight = imgWidth * 1.414,    // 출력 페이지 세로 길이 계산 A4 기준
          imgHeight = canvas.height * imgWidth / canvas.width,
          margin = 20;

        let
          heightLeft = imgHeight,
          position = 0;

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

  const calcAge = () => {
    const today = new Date();
    const birthDate = new Date(birth);
    const age = today.getFullYear() - birthDate.getFullYear();

    const sub = today.getMonth() - birthDate.getMonth();
    if (sub < 0 || (sub === 0 && today.getDate() < birthDate.getDate())) return age-1;
    else return age;
  }

  for(let repo of repos) {
    const languages = repo.languages;
    for(let language in languages) {
      if(!languagesDict[language]) languagesDict[language] = 0;
      languagesDict[language] += languages[language];
    }
  }

  return (
    <div>
      <div className={"title"}>
        <h4>포트폴리오 완성</h4>
        <button className={"nextButton"}
                onClick={toPdf}>추출하기</button>
      </div>

      <ul>
        <li>* Gitppo의 포트폴리오는 A4 용지를 기준으로 작성되었습니다.</li>
        <li>* 가급적 PC 화면으로 봐주시기 바랍니다.</li>
        <li>* 포트폴리오는 좌우로 스크롤하여 확인하실 수 있습니다.</li>
      </ul>

      <div className={"result-container"}>
        <div ref={ref} className={"result"} id={"capture"}>

          {/* 기본 인적사항 */}
          <div>
            <div className={"profile-head"}>
              <div className="profile-img">
                <img src={profile} alt={"프로필 사진"}/>
              </div>

              <div className="profile-text">
                <div className={"profile-text-intro"}>
                  <h4>안녕하세요!</h4>
                  <h4>개발자 <span className={"profile-text-name"}>{name}</span>입니다.</h4>
                </div>

                <h5>생년월일 {birth.replaceAll("-", ".").substring(2)} <span className={"subtitle"}>(만 {calcAge()}세)</span></h5>
                <a href={githubUrl}
                   target="_blank"
                   title="git page"
                   rel="noreferrer noopener">
                  <FontAwesomeIcon icon={faGithub} size={"2x"}/>
                  <h5>{githubUrl}</h5>
                </a>
              </div>
            </div>

            {/* 학력/경력 */}
            <div className="profile-progress">
              <h4 className={"result-subtitle"}>학력</h4>
              <hr className={"profile-progress-bar"}/>
              <div>{school.map(school => <School school={school} />)}</div>
            </div>
            <div className="profile-progress">
              <h4 className={"result-subtitle"}>경력</h4>
              <hr className={"profile-progress-bar"}/>
              <div>{company && company.map(company => <Work company={company} />)}</div>
            </div>
          </div>

          {/***********************************************/}
          {/* 기술 스택 / 사용 언어 */}
          <div  className="skill">
            <h4>사용 기술 및 언어</h4>
            <div>
              <div className={"skill-language"}><Language lang={languagesDict}/></div>
              <ul className={"skill-container"}>{skill.map(skill => <Skill skill={skill} />)}</ul>
            </div>
          </div>

          {/***********************************************/}
          <div>
            <h4>프로젝트</h4>
            <ul className={"project"}>{repos.map((repo, i) => <Repo repo={repo} key={i}/>)}</ul>
          </div>

          {/***********************************************/}
          <div>
            <h4>경험</h4>
            <ul className={"experience"}>{company.map(company => <Company company={company} />)}</ul>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Result;