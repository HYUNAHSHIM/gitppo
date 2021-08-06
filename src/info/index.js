import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function User() {
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [school1, setSchool1] = useState('');
    const [schoolName1, setSchoolName1] = useState('');
    const [school2, setSchool2] = useState('');
    const [schoolName2, setSchoolName2] = useState('');
    const [school3, setSchool3] = useState('');
    const [schoolName3, setSchoolName3] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [level1, setLevel1] = useState('');
    const [level2, setLevel2] = useState('');
    const [level3, setLevel3] = useState('');
    const [career1, setCareer1] = useState('');
    const [career2, setCareer2] = useState('');
    const [career3, setCareer3] = useState('');
    const [period1, setPeriod1] = useState('');
    const [period2, setPeriod2] = useState('');
    const [period3, setPeriod3] = useState('');
    const [activity1, setActivity1] = useState('');
    const [activity2, setActivity2] = useState('');
    const [activity3, setActivity3] = useState('');

    useEffect(() => {
        console.log("렌더링이 완료되었습니다!");
        console.log({
            name,
            birth,
            school1,
            schoolName1,
            school2,
            schoolName2,
            school3,
            schoolName3,
            skill1,
            level1,
            skill2,
            level2,
            skill3,
            level3,
            career1,
            period1,
            activity1,
            career2,
            period2,
            activity2,
            career3,
            period3,
            activity3
        });
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeBirth = e => {
        setBirth(e.target.value);
    };

    const onChangeSchool1 = e => {
        setSchool1(e.target.value);
    };

    const onChangeSchoolName1 = e => {
        setSchoolName1(e.target.value);
    };

    const onChangeSchool2 = e => {
        setSchool2(e.target.value);
    };

    const onChangeSchoolName2 = e => {
        setSchoolName2(e.target.value);
    };

    const onChangeSchool3 = e => {
        setSchool3(e.target.value);
    };

    const onChangeSchoolName3 = e => {
        setSchoolName3(e.target.value);
    };

    const onChangeSkill1 = e => {
        setSkill1(e.target.value);
    };

    const onChangeSkill2 = e => {
        setSkill2(e.target.value);
    };

    const onChangeSkill3 = e => {
        setSkill3(e.target.value);
    };

    const onChangeLevel1 = e => {
        setLevel1(e.target.value);
    };

    const onChangeLevel2 = e => {
        setLevel2(e.target.value);
    };

    const onChangeLevel3 = e => {
        setLevel3(e.target.value);
    };

    const onChangeCareer1 = e => {
        setCareer1(e.target.value);
    };

    const onChangeCareer2 = e => {
        setCareer2(e.target.value);
    };

    const onChangeCareer3 = e => {
        setCareer3(e.target.value);
    };

    const onChangePeriod1 = e => {
        setPeriod1(e.target.value);
    };

    const onChangePeriod2 = e => {
        setPeriod2(e.target.value);
    };

    const onChangePeriod3 = e => {
        setPeriod3(e.target.value);
    };

    const onChangeActivity1 = e => {
        setActivity1(e.target.value);
    };

    const onChangeActivity2 = e => {
        setActivity2(e.target.value);
    };

    const onChangeActivity3 = e => {
        setActivity3(e.target.value);
    };

    return (
        <div className="info">
            <div className="infoStyle">
                <h4 className="titleStyle">추가 내용 입력</h4>
                <Link to="/result"><Button className="nextButton">저장하기</Button></Link>
            </div>

            <div className="contentStyle">이름
                <div className="detailStyle1">
                   <input className="inputStyle" value={name} onChange={onChangeName}/>
                </div>
            </div>

            <div className="contentStyle">생년월일
                <div className="detailStyle1">
                    <input className="inputStyle" value={birth} onChange={onChangeBirth}></input>
                </div>
            </div>
            <div className="contentStyle">학력
                <div className="detailStyle2">
                    <input className="inputStyle" placeholder="고등학교" value={school1} onChange={onChangeSchool1}></input>
                    <input className="inputStyle" placeholder="한양고등학교" value={schoolName1} onChange={onChangeSchoolName1}></input>
                    <input className="inputStyle" placeholder="대학교" value={school2} onChange={onChangeSchool2}></input>
                    <input className="inputStyle" placeholder="한양대학교" value={schoolName2} onChange={onChangeSchoolName2}></input>
                    <input className="inputStyle" placeholder="대학원" value={school3} onChange={onChangeSchool3}></input>
                    <input className="inputStyle" placeholder="한양대학원" value={schoolName3} onChange={onChangeSchoolName3}></input>
                </div>
            </div>
            <div className="contentStyle">기술
                <div className="detailStyle2">
                    <input className="inputStyle" placeholder="C++" value={skill1} onChange={onChangeSkill1}></input>
                    <input className="inputStyle" placeholder="초급" value={level1} onChange={onChangeLevel1}></input>
                    <input className="inputStyle" placeholder="Python" value={skill2} onChange={onChangeSkill2}></input>
                    <input className="inputStyle" placeholder="초급" value={level2} onChange={onChangeLevel2}></input>
                    <input className="inputStyle" placeholder="Java" value={skill3} onChange={onChangeSkill3}></input>
                    <input className="inputStyle" placeholder="초급" value={level3} onChange={onChangeLevel3}></input>
                </div>
            </div>
            <div className="contentStyle">경력
                <div className="detailStyle3">
                    <input className="inputStyle" placeholder="회사명" value={career1} onChange={onChangeCareer1}></input>
                    <input className="inputStyle" placeholder="2021.00.00 ~ 2021.00.00" value={period1} onChange={onChangePeriod1}></input>
                    <input className="inputStyle" placeholder="업무 내용" value={activity1} onChange={onChangeActivity1}></input>
                    <input className="inputStyle" placeholder="회사명" value={career2} onChange={onChangeCareer2}></input>
                    <input className="inputStyle" placeholder="2021.00.00 ~ 2021.00.00" value={period2} onChange={onChangePeriod2}></input>
                    <input className="inputStyle" placeholder="업무 내용" value={activity2} onChange={onChangeActivity2}></input>
                    <input className="inputStyle" placeholder="회사명" value={career3} onChange={onChangeCareer3}></input>
                    <input className="inputStyle" placeholder="2021.00.00 ~ 2021.00.00" value={period3} onChange={onChangePeriod3}></input>
                    <input className="inputStyle" placeholder="업무 내용" value={activity3} onChange={onChangeActivity3}></input>
                </div>
            </div>
        </div> 
    );
}
export default User;