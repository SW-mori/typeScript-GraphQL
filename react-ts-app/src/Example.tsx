import React, { useState } from "react";
import TaskList from "./TaskList";

export type Todo = {
  id: number;
  text: string;
};

const Example = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "Todo1" },
    { id: 1, text: "Todo2" },
    { id: 2, text: "Todo3" },
    { id: 3, text: "Todo4" }
  ]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputText(e.target.value);

  const addTodo = () => {
    setTodos((state) => [...state, { id: state.length, text: inputText }]);
    setInputText("");
  };

  return (
    <>
      <input type="text" value={inputText} onChange={changeHandler} />
      <button onClick={addTodo}>+</button>
      <TaskList todos={todos} />
    </>
  );
};

export default Example;