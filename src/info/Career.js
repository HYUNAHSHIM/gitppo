import React, { useState, useEffect } from "react";
import "./index.css";
import Start from "./Calender2";
import End from "./Calender3";
import { FiMinus, FiPlus } from "react-icons/fi";

function Career() {
    const [inputList, setInputList] = useState([
        { company: "회사명", start: <Start/>, end: <End/>, story: "업무 내용" }
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
        setInputList([...inputList, { company:"", start: <Start/>, end: <End/>, story: "" }]);
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
                    <div key={i}>
                        <input
                        type="text"
                        name="company"
                        placeholder="회사명"
                        className="inputStyle"
                        value={item.company}
                        onChange={e => handleChange(e, i)}
                        />
                        <div className="startStyle"><Start
                        type="text"
                        name="start"
                        value={item.start}
                        onChange={e => handleChange(e, i)}
                        />
                        </div>
                        <div className="endStyle"><End
                        type="text"
                        name="end"
                        value={item.end}
                        onChange={e => handleChange(e, i)}
                        />
                        </div>
                        <div className="workStyle">
                            <input
                            type="text"
                            name="story"
                            placeholder="업무 내용"
                            className="textStyle"
                            value={item.story}
                            onChange={e => handleChange(e, i)}
                        />
                        </div>
                        <div className="careerButton">
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
export default Career;