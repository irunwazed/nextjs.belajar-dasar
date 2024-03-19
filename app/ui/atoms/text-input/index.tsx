"use client";
import { useState } from "react";
import { Placeholders } from "../../../../configs";
import { isLetter } from "../../../../configs/utils";

const TextInput = ({ onLoginEnter, id }: any) => {
  const placeholder = {
    text: Placeholders.TEXT_INPUT,
  };
  const [input, setInput] = useState("");
  const maxValueLength = 100;
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (isLetter(val) && val.length <= maxValueLength) {
      setInput(val);
      onLoginEnter(val);
    }
  };

  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder.text}
      value={input}
      onChange={onChangeHandler}
    />
  );
};

export default TextInput;
