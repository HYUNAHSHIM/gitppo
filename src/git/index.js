import React, {useState} from "react";
import "./index.css";
import {data} from "./data";

const options = [
  "README를 사용합니다.",
  "팀 멤버를 보여줍니다.",
]

function Repository({repo}) {
  const
    [description, setDescription] = useState(repo.description),
    [role, setRole] = useState(repo.role),
    [skills, setSkills] = useState(repo.skills),
    [implement, setImplement] = useState(repo.implement);

    return (
      <div className={"repo-each-container"}>
        <div className="list-group">
          {/* 레포지토리 이름 */}
          <label className="list-group-item repo-each-title">
            <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={event => {
              if(!event.target.checked) {
              }
            }}/>{repo.title}
          </label>

          {/* 레포지토리 별 옵션 */}
          <div className={"repo-each-options"}>
            {options.map(option => (
              <label className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" defaultChecked={true}/>{option}
              </label>
            ))}

            <div className="input-group-sm mb-3 repo-each-inputs">
              <span className="input-group-text" id="inputGroup-sizing-sm">설명</span>
              <textarea className="form-control"
                     aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm"
                     placeholder={"프로젝트에 대해서 설명해주세요."} value={description}
                     onChange={event => setDescription(event.target.value)}/>

              <span className="input-group-text" id="inputGroup-sizing-sm">역할</span>
              <textarea className="form-control"
                     aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm"
                     placeholder={"프로젝트에서 어떤 역할을 수행했는지 설명해주세요."} value={role}
                     onChange={event => setRole(event.target.value)}/>

              <span className="input-group-text" id="inputGroup-sizing-sm">사용 기술</span>
              <textarea className="form-control"
                     aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm"
                     placeholder={"사용한 기술들에 대해서 설명해주세요."} value={skills}
                     onChange={event => setSkills(event.target.value)}/>

              <span className="input-group-text" id="inputGroup-sizing-sm">구현 내용</span>
              <textarea className="form-control"
                     aria-label="Sizing example input"  aria-describedby="inputGroup-sizing-sm"
                     placeholder={"어떤 기능들을 구현했는지 설명해주세요."} value={implement}
                     onChange={event => setImplement(event.target.value)}/>
            </div>
          </div>
        </div>
      </div>
    );
}

function git() {
    return (
        <div id={"container"}>
          <h3>레포지토리 별 상세 설정</h3>
          <div>
            {data.map(data => <Repository repo={data}/>)}
          </div>
        </div>
    );
}

export default git;