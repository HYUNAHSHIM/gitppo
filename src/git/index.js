import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Repository from "./Repository";
import "./index.css";
import {data} from "./data";


function Git() {
  // TODO : 전체 진행 상황을 스텝으로 나타내자.
  const repoNum = data.length;
  const history = useHistory();
  const [curRepoIndex, setCurRepoIndex] = useState(0);
  const [repositories, setRepositories] = useState(() => {
    const temp = [];
    for(let i = 0 ; i < repoNum ; i++) {
      temp.push({
        "title": data[i].title,
        "repo": true,
        "readme": true,
        "team": true,
        "description": "",
        "role": "",
        "skill": "",
        "implement": ""
      });
    }
    return temp;
  });
  const [curRepo, setCurRepo] = useState(repositories[curRepoIndex]);

  const handleRepoChange = (changed) => {
    const temp = repositories;
    temp[curRepoIndex] = changed;
    setRepositories(temp);
    setCurRepo(repositories[curRepoIndex]);
  };
  const handleButtonClick = (event) => {
    if (event.target.name === "prevRepo") {
      if(curRepoIndex === 0) setCurRepoIndex(repoNum-1);
      else setCurRepoIndex((curRepoIndex-1) % repoNum);
    }
    else setCurRepoIndex((curRepoIndex+1) % repoNum);
  };

  useEffect(() => setCurRepo(repositories[curRepoIndex]), [curRepoIndex, repositories]);

  return (
    <div id={"container"}>

      {/* 타이틀 */}
      <div className={"subtitle"}>
        <h4>레포지토리 별 상세 설정</h4>
        <button className="nextButton"
                onClick={() => history.push("/info", repositories)}>
          저장
        </button>
      </div>

      {/* 레포지토리 내용 */}
      <Repository repo={curRepo}
                  handleRepoChange={handleRepoChange}/>

      {/* 레포지토리 이전/다음 버튼 */}
      <div className={"git-buttons"}>
        <button className="nextButton"
                name={"prevRepo"}
                onClick={handleButtonClick}>
          이전
        </button>
        <button className="nextButton"
                name={"nextRepo"}
                onClick={handleButtonClick}>
          다음
        </button>
      </div>
    </div>
  );
}

export default Git;