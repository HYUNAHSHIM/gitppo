import React, { useState, useEffect } from "react";
import "./index.css";
import Level from "./Level";
import { FiMinus, FiPlus } from "react-icons/fi";

function Skill() {
    const [inputList, setInputList] = useState([
        { skill: "Python", level: <Level/> }
    ]);
    
    useEffect(() => {
        console.log({
            ...inputList,
        });
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddInput = () => {
        setInputList([...inputList, {skill:"", level: <Level/>}]);
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    return(
        <div>
            {inputList.map((item, i) => {
                return(
                    <div className="skillStyle" key={i}>
                        <input
                        type="text"
                        name="skill"
                        placeholder="Python"
                        className="inputStyle"
                        value={item.skill}
                        onChange={e => handleChange(e, i)}
                        />
                        <div className="levelStyle"><Level
                        type="text"
                        name="level"
                        value={item.level}
                        onChange={e => handleChange(e, i)}
                        />
                        </div>
                        <div className="skillButton">
                            {inputList.length - 1 !== i &&<FiMinus
                            type="button"
                            value="삭제"
                            className="buttonStyle"
                            onClick={() => handleRemoveInput(i)}
                            />}
                            {inputList.length - 1 === i && <FiPlus
                            type="button"
                            value="추가"
                            className="buttonStyle"
                            onClick={handleAddInput}
                            />}
                        </div>
                    </div>
                )
            })}                                  
        </div>
    )
}
export default Skill;