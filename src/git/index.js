import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Repository from "./Repository";
import "./index.css";

function Git({location}) {
  const
    infos = location.state,
    history = useHistory();

  const
    [curRepoIndex, setCurRepoIndex] = useState(0),
    [repositories, setRepositories] = useState([]),
    [curRepo, setCurRepo] = useState();

  useEffect(() => {
    const temp = [];
    infos.repos.map(repo => {
      temp.push({
        "title": repo.name,
        "readme_content": repo.readme,
        "description": repo.description,
        "repo": repo.readme.length > 0,
        "readme": true,
        "role": "",
        "skill": "",
        "implement": "",
      });
    })
    setRepositories(temp);
    setCurRepo(repositories[curRepoIndex]);
  }, [repositories, curRepoIndex]);

  const handleRepoChange = (changed) => {
    const temp = repositories;
    temp[curRepoIndex] = changed;
    setRepositories(temp);
    setCurRepo(repositories[curRepoIndex]);
  };
  const handleButtonClick = (event) => {
    if (event.target.name === "prevRepo") {
      if(curRepoIndex === 0) setCurRepoIndex(repositories.length-1);
      else setCurRepoIndex((curRepoIndex-1) % repositories.length);
    }
    else setCurRepoIndex((curRepoIndex+1) % repositories.length);
  };
  const handleSaveButton = () => {
    // 이전 페이지에서 전달받은 infos에 입력된 값들을 input에 대한 값으로 넣는다.
    repositories.map(repo => {
      if(repo.repo) {
        const index = infos.repos.find(e => e.name === repo.title).index;
        infos.repos[index].input = {
          "readme": repo.readme,
          "description": repo.description,
          "role": repo.role,
          "skill": repo.skill,
          "implement": repo.implement,
        };
      }
    });

    // 수정된 infos를 다음 페이지로 넘긴다.
    history.push("/info", infos);
  }


  return (
    <div id={"container"}>

      {/* 타이틀 */}
      <div className={"subtitle"}>
        <h4>레포지토리 별 상세 설정</h4>
        <button className="nextButton"
                onClick={handleSaveButton}>저장</button>
      </div>

      {/* 레포지토리 내용 */}
      <Repository repo={curRepo}
                  handleRepoChange={handleRepoChange}/>

      {/* 레포지토리 이전/다음 버튼 */}
      <div className={"git-buttons"}>
        <button className="nextButton"
                name={"prevRepo"}
                onClick={handleButtonClick}>이전</button>
        <button className="nextButton"
                name={"nextRepo"}
                onClick={handleButtonClick}>다음</button>
      </div>
    </div>
  );
}

export default Git;