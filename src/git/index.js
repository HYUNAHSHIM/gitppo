import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Repository from "./Repository";
import Loading from "../Loading";
import "./index.css";

function Git({ location }) {
  const
    history = useHistory(),
    [curRepoIndex, setCurRepoIndex] = useState(),
    [repositories, setRepositories] = useState(),
    [curRepo, setCurRepo] = useState();

  // 최초 로딩 시 1번만 실행
  useEffect(() => {
    const fetchRepo = () => {
      const infos = location.state.data;
      return infos.repos.map(repo => {
        return {
          "title": repo.name,
          "readme_content": repo.readme,
          "description": repo.description,
          "repo": true,
          "readme": repo.readme?.length > 0,
          "role": "",
          "skill": "",
          "implement": "",
        }
      })
    }

    try {
      setRepositories(fetchRepo());
      setCurRepoIndex(0);
    }
    catch (e) {
    }
  }, []);

  useEffect(() =>
    repositories && setCurRepo(repositories[curRepoIndex]),
    [repositories, curRepoIndex]);

  const handleRepoChange = (changed) => {
    const temp = repositories;
    temp[curRepoIndex] = changed;
    setRepositories(temp);
    setCurRepo(repositories[curRepoIndex]);
  };
  const handleButtonClick = (event) => {
    if (event.target.name === "prevRepo") {
      if (curRepoIndex === 0) setCurRepoIndex(repositories.length - 1);
      else setCurRepoIndex((curRepoIndex - 1) % repositories.length);
    }
    else setCurRepoIndex((curRepoIndex + 1) % repositories.length);
  };
  const handleSaveButton = () => {
    // 이전 페이지에서 전달받은 infos에 입력된 값들을 input에 대한 값으로 넣는다.
    const infos = location.state.data;
    const result = repositories
      .filter(repo => repo.repo)
      .map(repo => {
        const ordinary = infos.repos.find(e => e.name === repo.title);
        return {
          ...ordinary,
          "readme": repo.readme ? repo.readme_content : "",
          'input': {
            "description": repo.description,
            "role": repo.role,
            "skill": repo.skill,
            "implement": repo.implement,
          },
        };
      });

    // 수정된 infos를 다음 페이지로 넘긴다.
    history.push("/info", result);
  }

  if (curRepo === undefined) {
    return (
      <div className={"error"}>
        <div>
          <p>데이터를 준비 중 입니다.</p>
          <p>잠시만 기다려 주세요.</p>
          <Loading />
        </div>
      </div>
    );
  }
  else return (
    <div>
      {/* 타이틀 */}
      <div className={"title"}>
        <h4>레포지토리 별 상세 설정 <span>{curRepoIndex + 1}/{repositories.length}</span></h4>
        <button className="nextButton"
                onClick={handleSaveButton}>저장</button>
      </div>

      {/* 레포지토리 내용 */}
      <Repository repo={curRepo}
                  handleRepoChange={handleRepoChange} />

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