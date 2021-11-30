import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleCompleteTodo,
} from "../redux/slice/todosSlice";
import { RootState } from "../redux/store";
import { ITodo } from "../redux/slice/todosSlice";

export const TodoComponent = () => {
  // REDUX
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  // STATE
  let [newTask, setNewTask] = useState<ITodo>();

  // ACTIONS
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      id: Date.now(),
      text: event.target.value,
      completed: false,
    });
  };

  // REDUX ACTIONS
  const handleClickOnComplete = (todo: ITodo) => {
    dispatch(toggleCompleteTodo(todo));
  };

  const handleRemove = (todo: ITodo) => {
    dispatch(removeTodo(todo));
  };

  const handleSubmitNewTodo = () => {
    newTask && dispatch(addTodo(newTask));
  };

  return (
    <div>
      <h1>Todo App !</h1>

      <div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.id} - {todo.text} -{" "}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleClickOnComplete(todo)}
              />
              <button onClick={() => handleRemove(todo)}>Remove task</button>
            </div>
          );
        })}
      </div>

      <hr />

      <div>
        <input placeholder="Add todo" type="text" onChange={handleChange} />
        <button onClick={handleSubmitNewTodo}>Add todo</button>
      </div>
    </div>
  );
};
