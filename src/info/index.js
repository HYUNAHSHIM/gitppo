import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import input from '@material-ui/core/input';
import { FiMinus, FiPlus } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

function User({ location }) {
    const history = useHistory();

    const
      [name, setName] = useState(""),
      [birth, setBirth] = useState(""),
      [schoolList, setSchoolList] = useState([{school: "", schoolName: ""}]),
      [skillList, setSkillList] = useState([{skill: "", level: "10", open: false}]),
      [companyList, setCompanyList] = useState([{company: "", start: "", end: "", story: ""}]),
      [profileImg, setProfileImg] = useState("");

    const onClickSave = () => {
        history.push({
            pathname: "/result",
            state: {
                ...location.state,
                name,
                birth,
                schoolList,
                skillList,
                companyList,
                img: profileImg,
            }
        });
    };

    const onChangeName = (e) => setName(e.target.value);
    const onChangeBirth = (e) => setBirth(e.target.value);
    const onChangeImg = (e) => {
        const files = e.target.files;
        const theFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(theFile);
        reader.onloadend = (finishedEvent) =>{
            const {currentTarget : { result }} = finishedEvent;
            setProfileImg(result);
        }
    };
    const handleSchoolChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...schoolList];
        list[index][name] = value;
        setSchoolList(list);
    };
    const handleAddSchool = () => {
        setSchoolList([...schoolList, {school: "", schoolName: ""}]);
    };
    const handleRemoveSchool = (index) => {
        const list = [...schoolList];
        list.splice(index, 1);
        setSchoolList(list);
    };
    const handleSkillChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...skillList];
        list[index][name] = value;
        setSkillList(list);
    };
    const handleAddSkill = () => {
        setSkillList([...skillList, {skill: "", level: "10", open: false}]);
    }
    const handleRemoveSkill = index => {
        const list = [...skillList];
        list.splice(index, 1);
        setSkillList(list);
    }
    const handleOpen = (e, index) => {
        const list = [...skillList];
        list[index].open = !list[index].open;
        setSkillList(list);
    }
    const handleLevelChange = (e, index) => {
        const {value} = e.target;
        const list = [...skillList];
        list[index].level = value;
        setSkillList(list);
    }
    const handleCompanyChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...companyList];
        list[index][name] = value;
        setCompanyList(list);
    }
    const handleAddCompany = () => {
        setCompanyList([...companyList, {company: "", start: "", end: "", story: ""}]);
    }
    const handleRemoveCompany = index => {
        const list = [...companyList];
        list.splice(index, 1);
        setCompanyList(list);
    }
    const onChangeStart = (e, index) => {
        const {value} = e.target;
        const list = [...companyList];
        list[index].start = value;
        setCompanyList(list);
    };
    const onChangeEnd = (e, index) => {
        const {value} = e.target;
        const list = [...companyList];
        list[index].end = value;
        setCompanyList(list);
    };

    return (
      <div id="container">
          <div className="info-title">
              <h4 className="title">추가 내용 입력</h4>
              <Button className="nextButton"
                      onClick={onClickSave}>저장하기</Button>
          </div>

          <div className={"info-each"}>
              <label>사진</label>
              <input type={"file"}
                     accept={"image/*"}
                     onChange={onChangeImg} />

              {profileImg && (
                <span>
                    <img src={profileImg}
                         alt="프로필 이미지"
                         height={"100px"}/>
                </span>
              )}
          </div>
          <div className="info-each">
              <label>이름</label>
              <input value={name}
                     onChange={onChangeName}/>
          </div>

          <div className="info-each">
              <label>생년월일</label>
              <input value={birth}
                     onChange={onChangeBirth}
                     id="date"
                     type="date"/>
          </div>

          <div className="info-each">
              <label>학력</label>
              <ul className={"info-each-input-container"}>
                  {schoolList.map((item, i) => (
                    <li key={i} >
                        <input type="text"
                               name="school"
                               placeholder="구분 (예 : 고등학교)"
                               value={item.school}
                               onChange={e => handleSchoolChange(e, i)}/>
                        <input type="text"
                               name="schoolName"
                               placeholder="학교 이름"
                               value={item.schoolName}
                               onChange={e => handleSchoolChange(e, i)}/>

                        {schoolList.length - 1 !== i
                        && <FiMinus type="button"
                                    value="삭제"
                                    onClick={() => handleRemoveSchool(i)}/>
                        }
                        {schoolList.length - 1 === i
                        && <FiPlus type="button"
                                   value="추가"
                                   onClick={handleAddSchool}/>
                        }
                    </li>
                  ))}
              </ul>
          </div>

          <div className="info-each">
              <label>기술/언어</label>
              <ul className={"info-each-input-container"}>
                  {skillList.map((item, i) => (
                    <li key={i}>
                        <input type="text"
                               name="skill"
                               placeholder="항목 (예 : JavaScript)"
                               value={item.skill}
                               onChange={e => handleSkillChange(e, i)}/>

                        <FormControl>
                            <Select labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    value={item.level}
                                    open={item.open}
                                    onClose={e => handleOpen(e, i)}
                                    onOpen={e => handleOpen(e, i)}
                                    onChange={e => handleLevelChange(e, i)} >
                                <MenuItem value={10}>초급</MenuItem>
                                <MenuItem value={20}>중급</MenuItem>
                                <MenuItem value={30}>고급</MenuItem>
                            </Select>
                        </FormControl>

                        {skillList.length - 1 !== i
                        && <FiMinus type="button"
                                    value="삭제"
                                    onClick={() => handleRemoveSkill(i)}/>
                        }
                        {skillList.length - 1 === i
                        && <FiPlus type="button"
                                   value="추가"
                                   onClick={handleAddSkill}/>
                        }
                    </li>
                  ))}
              </ul>
          </div>

          <div className="info-each">
              <label>경력</label>
              <ul className={"info-each-input-container"}>
                  {companyList.map((item, i) => (
                    <li key={i}>
                        <input type="text"
                               name="company"
                               placeholder="회사명"
                               className="inputStyle"
                               value={item.company}
                               onChange={e => handleCompanyChange(e, i)} />
                        <input value={item.start}
                               onChange={e => onChangeStart(e, i)}
                               id="date"
                               type="date"/>
                        <input value={item.end}
                               onChange={e => onChangeEnd(e, i)}
                               id="date"
                               type="date"/>
                        <input type="text"
                               name="story"
                               placeholder="업무 내용"
                               className="textStyle"
                               value={item.story}
                               onChange={e => handleCompanyChange(e, i)}/>
                        {companyList.length - 1 !== i
                        && <FiMinus type="button"
                                    value="삭제"
                                    className="buttonStyle"
                                    onClick={() => handleRemoveCompany(i)} />
                        }
                        {companyList.length - 1 === i
                        && <FiPlus type="button"
                                   value="추가"
                                   className="buttonStyle"
                                   onClick={handleAddCompany}/>
                        }
                    </li>
                  ))}
              </ul>
          </div>

      </div>
    );
}

export default User;