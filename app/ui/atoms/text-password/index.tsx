'use client'
import { useState } from "react";
import { Placeholders } from "../../../../configs"; 

const PasswordInput = ({ onLoginEnter, id }: any) => {
    const placeholder = {
        text: Placeholders.TEXT_PASSWORD
    }
  const [input, setInput] = useState("");
  const maxValueLength = 100;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    onLoginEnter(val);
  };
    return (
        <input id={id} type="text" onChange={onChangeHandler} placeholder={placeholder.text}/>
    )
}

export default PasswordInput