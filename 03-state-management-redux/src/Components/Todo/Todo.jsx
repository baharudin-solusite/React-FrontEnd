import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./TodoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const [inputTodo, setInputTodo] = useState("");
  const todos = useSelector((state) => state.todo.data);

  const handleClick = () => {
    console.log(inputTodo);

    let newTodo = {
      id: todos[todos.length - 1].id + 1,
      todo: inputTodo,
    };

    dispatch(addTodo(newTodo));
    setInputTodo("");
  };

  return (
    <div>
      <h1 className="">Todo</h1>
      <input
        type="text"
        placeholder="input new todo..."
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />

      <button variant="primary" type="submit" onClick={handleClick}>
        ADD
      </button>
      {todos.map((item) => (
        <p key={item.id}>{item.todo}</p>
      ))}
    </div>
  );
};

export default Todo;
