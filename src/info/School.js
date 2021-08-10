import React, { useState, useEffect } from "react";
import "./index.css";
import { FiMinus, FiPlus } from "react-icons/fi";

function School() {
    const [inputList, setInputList] = useState([
        { school: "고등학교", schoolName: "한양고등학교" }
    ]);

    useEffect(() => {
        console.log({
            ...inputList
        });
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleAddInput = () => {
        setInputList([...inputList, {school:"", schoolName:""}]);
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
                        name="school"
                        placeholder="고등학교"
                        className="inputStyle"
                        value={item.school}
                        onChange={e => handleChange(e, i)}
                        />
                        <input
                        type="text"
                        name="schoolName"
                        placeholder="한양고등학교"
                        className="inputStyle"
                        value={item.schoolName}
                        onChange={e => handleChange(e, i)}
                        />
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
                )
            })}                                  
        </div>
    )
}
export default School;