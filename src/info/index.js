import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { FiMinus, FiPlus } from "react-icons/fi";

function User({location}) {
    const [ name, setName ] = useState("");
    const [ birth, setBirth ] = useState("");
    const [ schoolList, setSchoolList] = useState([{ school: "고등학교", schoolName: "한양고등학교" }]);
    const [ skillList, setSkillList] = useState([{ skill: "Python", level: "10", open: false}]);
    const [ companyList, setCompanyList] = useState([{ company: "회사명", start: "2021-07-21", end: "2021-07-31", story: "업무 내용" }]);
    const [ haveCareer, setHaveCareer ] = useState(true);
    const history = useHistory();
    
    
    const usebirthStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
    }));
    const birthclasses = usebirthStyles();
    
    const uselevelStyles = makeStyles((theme) => ({
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));
    const levelclasses = uselevelStyles();

    const onClickSave = e => {
        const result = {
            ...location.state,
            name,
            birth,
            schoolList,
            skillList,
            companyList
        }
        console.log(result)
        history.push({
            pathname: "/result",
            state: result
        });
    }

    const onChangename = e => {
        setName(e.target.value);
    };

    
    const onChangeBirth = e => {
        setBirth(e.target.value);
    };

    const handleSchoolChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...schoolList];
        list[index][name] = value;
        setSchoolList(list);
    }

    const handleAddSchool = () => {
        setSchoolList([...schoolList, {school:"", schoolName:""}]);
    }

    const handleRemoveSchool = index => {
        const list = [...schoolList];
        list.splice(index, 1);
        setSchoolList(list);
    }
    
    const handleSkillChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...skillList];
        list[index][name] = value;
        setSkillList(list);
    }

    const handleAddSkill = () => {
        setSkillList([...skillList, {skill:"", level: "10", open: false}]);
    }

    const handleRemoveSkill = index => {
        const list = [...skillList];
        list.splice(index, 1);
        setSkillList(list);
    }

    const handleOpen = (e, index) => {
        const list = [...skillList];
        if (list[index].open) {
            list[index].open = false;
        } else {
            list[index].open = true;
        }
        setSkillList(list);
    }

    const handleLevelChange = (e, index) => {
        const { value } = e.target;
        const list = [...skillList];
        list[index].level = value;
        setSkillList(list);
    }

    const handleCompanyChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...companyList];
        list[index][name] = value;
        setCompanyList(list);
    }

    const handleAddCompany = () => {
        setCompanyList([...companyList, { company:"", start: "2021-07-12", end: "2021-07-13", story: "" }]);
    }

    const handleRemoveCompany = index => {
        const list = [...companyList];
        list.splice(index, 1);
        setCompanyList(list);
    }

    const onClickHaveCarrer = () => {
        setHaveCareer(cur => {
            if (!cur === false) {
                setCompanyList(cur => []);
            } else {
                setCompanyList(cur => [{ company: "회사명", start: "2021-07-21", end: "2021-07-31", story: "업무 내용" }]);
            }
            return !cur;
        });
    }

    const onChangeStart = (e, index) => {
        const { value } = e.target;
        const list = [...companyList];
        list[index].start = value;
        setCompanyList(list);
    }

    const onChangeEnd = (e, index) => {
        const { value } = e.target;
        const list = [...companyList];
        list[index].end = value;
        setCompanyList(list);
    }

    return (
        <div className="info" style={{padding: "50px 0px"}}>
            <div className="infoStyle">
                <h4 className="title">추가 내용 입력</h4>
                <Button className="nextButton" 
                onClick={onClickSave}>저장하기</Button>
            </div>

            <div className="contentStyle">이름
                <div className="detailStyle1">
                    <input className="inputStyle" value={name} onChange={onChangename}/>
                </div>
            </div>

            <div className="contentStyle">생년월일
                <div className="detailStyle1">
                    <div className="birthStyle">
                        <form className={birthclasses.container} noValidate>     
                            <TextField
                            value={birth}
                            onChange={onChangeBirth}
                            id="date"
                            label="Birth"
                            type="date"
                            className={birthclasses.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </form>
                    </div>
                </div>
            </div>

            <div className="contentStyle">학력
                <div className="detailStyle2">
                    <div>
                        {schoolList.map((item, i) => {
                            return(
                                <div key={i}>
                                    <input
                                    type="text"
                                    name="school"
                                    placeholder="고등학교"
                                    className="inputStyle"
                                    value={item.school}
                                    onChange={e => handleSchoolChange(e, i)}
                                    />
                                    <input
                                    type="text"
                                    name="schoolName"
                                    placeholder="한양고등학교"
                                    className="inputStyle"
                                    value={item.schoolName}
                                    onChange={e => handleSchoolChange(e, i)}
                                    />
                                    {schoolList.length - 1 !== i &&<FiMinus
                                    type="button"
                                    value="삭제"
                                    className="buttonStyle"
                                    onClick={() => handleRemoveSchool(i)}
                                    />}
                                    {schoolList.length - 1 === i && <FiPlus
                                    type="button"
                                    value="추가"
                                    className="buttonStyle"
                                    onClick={handleAddSchool}
                                    />}
                                </div>
                            )
                        })}                                  
                    </div>
                </div>
            </div>

            <div className="contentStyle">기술
                <div className="detailStyle2">
                    <div>
                        {skillList.map((item, i) => {
                            return(
                                <div className="skillStyle" key={i}>
                                    <input
                                        type="text"
                                        name="skill"
                                        placeholder="Python"
                                        className="inputStyle"
                                        value={item.skill}
                                        onChange={e => handleSkillChange(e, i)}
                                    />
                                    <div className="levelStyle">
                                        <div>
                                            <FormControl className={levelclasses.formControl}>
                                                <InputLabel id="demo-controlled-open-select-label">Level</InputLabel>
                                                <Select
                                                labelId="demo-controlled-open-select-label"
                                                id="demo-controlled-open-select"
                                                open={item.open}
                                                onClose={e => handleOpen(e, i)}
                                                onOpen={e => handleOpen(e, i)}
                                                value={item.level}
                                                onChange={e => handleLevelChange(e, i)}
                                                >
                                                <MenuItem value={10}>초급</MenuItem>
                                                <MenuItem value={20}>중급</MenuItem>
                                                <MenuItem value={30}>고급</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className="skillButton">
                                        {skillList.length - 1 !== i &&<FiMinus
                                        type="button"
                                        value="삭제"
                                        className="buttonStyle"
                                        onClick={() => handleRemoveSkill(i)}
                                        />}
                                        {skillList.length - 1 === i && <FiPlus
                                        type="button"
                                        value="추가"
                                        className="buttonStyle"
                                        onClick={handleAddSkill}
                                        />}
                                    </div>
                                </div>
                            )
                        })}                                  
                    </div>
                </div>
            </div>   

            <div className="contentStyle">경력
                <div className="detailStyle3">
                    <div>
                        <div style={{display: "inline-block", fontSize: "0.8em", padding: "0px 5px 0px 20px"}}>경력 존재 여부</div>
                        <input type="checkbox" checked={haveCareer} style={{cursor: "pointer"}} onClick={onClickHaveCarrer}></input>
                    </div>
                    <div>
                        {companyList.map((item, i) => {
                            return(
                                <div key={i}>
                                    <input
                                    type="text"
                                    name="company"
                                    placeholder="회사명"
                                    className="inputStyle"
                                    value={item.company}
                                    onChange={e => handleCompanyChange(e, i)}
                                    />
                                    <div className="startStyle">
                                        <form className={birthclasses.container} noValidate>
                                            <TextField
                                                value={item.start}
                                                onChange={e => onChangeStart(e, i)}  
                                                id="date"
                                                label="Start"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={birthclasses.textField}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                        </form>
                                    </div>
                                    <div className="endStyle">
                                        <form className={birthclasses.container} noValidate>
                                            <TextField
                                                value={item.end}
                                                onChange={e => onChangeEnd(e, i)}  
                                                id="date"
                                                label="Start"
                                                type="date"
                                                defaultValue="2017-05-24"
                                                className={birthclasses.textField}
                                                InputLabelProps={{
                                                shrink: true,
                                                }}
                                            />
                                        </form>
                                    </div>
                                    <div className="workStyle">
                                        <input
                                        type="text"
                                        name="story"
                                        placeholder="업무 내용"
                                        className="textStyle"
                                        value={item.story}
                                        onChange={e => handleCompanyChange(e, i)}
                                    />
                                    </div>
                                    <div className="careerButton">
                                        {companyList.length - 1 !== i &&<FiMinus
                                        type="button"
                                        value="삭제"
                                        className="buttonStyle"
                                        onClick={() => handleRemoveCompany(i)}
                                        />}
                                        {companyList.length - 1 === i && <FiPlus
                                        type="button"
                                        value="추가"
                                        className="buttonStyle"
                                        onClick={handleAddCompany}
                                        />}
                                    </div>
                                </div>
                            )
                        })}                                  
                    </div>
                </div> 
            </div>

        </div> 
    );
};
export default User;