import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import Essential from "./Essential";
import Option from "./Option";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


function User({location}) {
  const history = useHistory();
  const
    [info, setInfo] = useState({option: {},}),
    [essentialData, setEssentialData] = useState({profile: "", name: "", birth: "",}),
    [optionData, setOptionData] = useState({school: [], skill: [], company: [],});

  useEffect(() => {
    setInfo({...info, option: optionData});
  }, [optionData]);

  const onClickSave = (e) => {
    e.preventDefault();
    const result = {
      ...essentialData,
      option: optionData,
      git: location.state.git,
      user: location.state.user,
    };
    history.push("/result", result);
  };

  return (
    <div className={"info"}>
      {/* 제목 */}
      <div className="title">
        <h4 className="title">추가 내용 입력</h4>
        <button className="nextButton"
                form={"info-form"}>저장하기</button>
      </div>

      <div>* 날짜 선택은 달력 아이콘을 누르세요.</div>

      {/* 입력 창 */}
      <form id={"info-form"}
            onSubmit={onClickSave}>
        {/* 필수 입력 정보*/}
        <Essential data={essentialData} setData={setEssentialData}/>

        {/* 선택사항 */}
        <Option data={optionData} setData={setOptionData} />
      </form>
    </div>
  );
}

export default User;