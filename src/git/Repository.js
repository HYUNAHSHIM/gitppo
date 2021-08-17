import ReactMarkdown from "react-markdown";
import "./index.css";
import Popup from "reactjs-popup";

function Repository({ repo, handleRepoChange }) {

  const contentStyle = { 
    width: "auto", 
    minWidth: "600px",
    height: "400px", 
    border: "1px solid #ccc", 
    padding: "30px", 
    borderRadius: "10px", 
    background: "white",
    overflow: "auto",
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    // 레포를 먼저 체크해야 함.
    if (!repo.repo && name !== "repo")
      return window.alert("레포지토리를 먼저 사용함으로 체크 해주세요.");

    if (name === "readme" && !repo.readme_content)
      return window.alert("README 내용이 없습니다.");

    // 변경 내용 저장
    handleRepoChange({
      ...repo,
      [name]: value === "on" ? event.target.checked : value
    });

    // 레포지토리를 사용 안함으로 변경할 경우, 하위 항목을 모두 해제 함.
    if (name === "repo" && !event.target.checked)
      handleRepoChange({
        ...repo,
        "repo": false,
        "readme": false,
      });
  };
  const handleOnKeyUp = (obj) => {
    // 엔터 시 input box의 높이를 늘림.
    obj.currentTarget.style.height = "1px";
    obj.currentTarget.style.height = `${obj.currentTarget.scrollHeight + 16}px`;
  }

  return (
    <div className={"repo-each-container list-group"}>

      {/* 레포지토리 이름 */}
      <label className="list-group-item repo-each-title">
        <input className="form-check-input me-1"
          type="checkbox"
          name="repo"
          checked={repo.repo}
          onChange={handleInputChange} />
        {repo.title}
      </label>


      {/* 레포지토리 별 옵션 */}
      <div className={"repo-each-options"}>

        <div className={"readme-container"}>
          {/* 체크 옵션 */}
          <label className="list-group-item">
            <input className="form-check-input me-1"
              type="checkbox"
              name="readme"
              checked={repo.readme}
              onChange={handleInputChange} />
            <span>README의 내용을 반영합니다.</span>
          </label>

          {/* README 미리보기 */}
          <div className={"readme-preview-container"}>
            <Popup 
              trigger={<button className="readme-preview-button">미리보기</button>} 
              modal
              contentStyle={contentStyle}
              lockScroll={true}
            >
              {close => (
                <>
                <div className="close-button" onClick={close}>&times;</div>
                <ReactMarkdown>
                  {repo.readme_content === undefined ? "README가 없습니다." : repo.readme_content}
                </ReactMarkdown>
                </>
              )
              }
              
            </Popup>
          </div>
        </div>
        

        {/* 서술 옵션 */}
        <div className="input-group-sm mb-3 repo-each-inputs">
          <span className="input-group-text"
            id="inputGroup-sizing-sm">설명</span>
          <textarea className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={"프로젝트에 대해서 설명해주세요."}
            name={"description"}
            value={repo.description}
            onChange={handleInputChange}
            onKeyUp={handleOnKeyUp} />

          <span className="input-group-text"
            id="inputGroup-sizing-sm">역할</span>
          <textarea className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={"프로젝트에서 어떤 역할을 수행했는지 설명해주세요."}
            name={"role"}
            value={repo.role}
            onChange={handleInputChange}
            onKeyUp={handleOnKeyUp} />

          <span className="input-group-text"
            id="inputGroup-sizing-sm">사용 기술</span>
          <textarea className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={"사용한 기술들에 대해서 설명해주세요."}
            name={"skill"}
            value={repo.skill}
            onChange={handleInputChange}
            onKeyUp={handleOnKeyUp} />

          <span className="input-group-text"
            id="inputGroup-sizing-sm">구현 내용</span>
          <textarea className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            placeholder={"어떤 기능들을 구현했는지 설명해주세요."}
            name={"implement"}
            value={repo.implement}
            onChange={handleInputChange}
            onKeyUp={handleOnKeyUp} />
        </div>
      </div>
    </div>
  );
}

export default Repository;