import React, { useState } from "react";

// INTERFACES
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const TodoComponent = () => {
  // STATE
  const initialTodos: Todo[] = [
    { id: 0, text: "Todo 1", completed: false },
    { id: 1, text: "Todo 2", completed: true },
    { id: 2, text: "Todo 3", completed: false },
  ];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  let [newTask, setNewTask] = useState<Todo>();

  // ACTIONS
  const handleClickOnComplete = (id: number, completed: boolean) => {
    const newTodos = [...todos];
    newTodos[id].completed = !completed;
    setTodos(newTodos);
  };

  const handleRemove = (todo: Todo) => {
    const newTodos = todos.filter((t) => t !== todo);
    setTodos(newTodos);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({
      id: todos.length,
      text: event.target.value,
      completed: false,
    });
  };

  const handleSubmitNewTodo = () => {
    const newTodos = [...todos];
    newTask && newTodos.push(newTask);
    setTodos(newTodos);
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
                onChange={() => handleClickOnComplete(todo.id, todo.completed)}
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
