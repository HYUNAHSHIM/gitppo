import {FiMinus, FiPlus} from "react-icons/fi";
import input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function Option({data, setData}) {
  const onClickPlusButton = (e, i, isPlus, tag) => {
    e.preventDefault();

    if(isPlus) {
      let temp = {};
      if(tag === "school") temp = {index: "", name: "", type: "졸업", start: "", end: ""};
      else if(tag === "skill") temp = {name: "", level: "초급"};
      else if(tag === "company") temp = {start: "", end: "", name: "", position: "", content: ""};
      setData({...data, [tag]: [...data[tag], temp,]});
    }
    else {
      setData({
        ...data,
        [tag]: [
          ...data[tag].slice(0, i),
          ...data[tag].slice(i + 1),
        ]
      });
    }
  };

  const onChangeOptions = (e, i, tag) => {
    const {name, value} = e.target;
    setData({...data,
      [tag]: [
        ...data[tag].slice(0, i),
        {...data[tag][i], [name]: value},
        ...data[tag].slice(i+1),
      ]
    });
  };

  return (
    <div className={"option-container"}>
      <div className={"title"}><h4>선택 사항</h4></div>

      {/* 학력 */}
      <div>
        <label>학력</label>
        <ul className={"option-each-container"}>
          {data.school?.map((school, i) => (
            <li className={"option-each-input"}
                key={i}
                onChange={e => onChangeOptions(e, i, "school")}>
              <input type="text"
                     name="index"
                     placeholder="구분 (예 : 고등학교)"
                     value={school.index}/>
              <input type="text"
                     name="name"
                     placeholder="학교 이름"
                     value={school.name}/>

              <input type="date"
                     name={"start"}
                     value={school.start}/>
              <input type="date"
                     name={"end"}
                     value={school.end}/>

              <Select labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      name={"type"}
                      value={school.type}
                      defaultValue={`졸업`}
                      onChange={e => onChangeOptions(e, i, "school")} >
                <MenuItem value={`졸업`}>졸업</MenuItem>
                <MenuItem value={`재학`}>재학</MenuItem>
                <MenuItem value={`휴학`}>휴학</MenuItem>
                <MenuItem value={`중퇴`}>중퇴</MenuItem>
              </Select>

              <button className={"info-float-button"}
                      onClick={e => onClickPlusButton(e, i, false, "school")}><FiMinus/></button>
            </li>
          ))}
          <li>
            <button className={"info-float-button"}
                    onClick={e => onClickPlusButton(e, 0, true, "school")}><FiPlus/></button>
          </li>
        </ul>
      </div>

      {/* 기술 언어 */}
      <div>
        <label>기술/언어</label>
        <ul className={"option-each-container"}>
          {data.skill?.map((skill, i) => (
            <li className={"option-each-input"}
                key={i}
                onChange={e => onChangeOptions(e, i, "skill")}>
              <input type="text"
                     name={"name"}
                     placeholder="항목 (예 : JavaScript)"
                     value={skill.name} />

              <Select labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      name={"level"}
                      value={skill.level}
                      defaultValue={`초급`}
                      onChange={e => onChangeOptions(e, i, "skill")} >
                <MenuItem value={`초급`}>초급</MenuItem>
                <MenuItem value={`중급`}>중급</MenuItem>
                <MenuItem value={`고급`}>고급</MenuItem>
              </Select>

              <button className={"info-float-button"}
                      onClick={e => onClickPlusButton(e, i, false, "skill")}><FiMinus/></button>
            </li>
          ))}

          <li>
            <button className={"info-float-button"}
                    onClick={e => onClickPlusButton(e, 0, true, "skill")}><FiPlus/></button>
          </li>
        </ul>
      </div>

      {/* 경력사항 */}
      <div>
        <label>경력</label>
        <ul className={"option-each-container"}>
          {data.company?.map((company, i) => (
            <li className={"option-each-input"}
                key={i}
                onChange={e => onChangeOptions(e, i, "company")}>
              <input type="date"
                     name={"start"}
                     value={company.start}/>
              <input type="date"
                     name={"end"}
                     value={company.end}/>

              <input type="text"
                     name="name"
                     placeholder="회사명"
                     value={company.name}/>
              <input type="text"
                     name={"position"}
                     placeholder="직급"
                     value={company.position}/>
              <input type="text"
                     name={"content"}
                     placeholder="업무 내용"
                     value={company.content}/>

              <button className={"info-float-button"}
                      onClick={e => onClickPlusButton(e, i, false, "company")}><FiMinus/></button>
            </li>
          ))}

          <li>
            <button className={"info-float-button"}
                    onClick={e => onClickPlusButton(e, 0, true, "company")}><FiPlus/></button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Option;