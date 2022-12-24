import React from "react";
import { useState } from "react";

function Input({ task, setTask, setCount, changecount }) {
  const [value, setValue] = useState("");

  const changevalue = (e) => {
    setValue(e.target.value);
    changecount();
  };
  const newArray = (e) => {
    e.preventDefault();
    setTask([...task, value]);
    setValue("");
    setCount(0);
  };

  return (
    <form action="" onSubmit={newArray}>
      <input type="text" value={value} onChange={changevalue} />
    </form>
  );
}
export default Input;
