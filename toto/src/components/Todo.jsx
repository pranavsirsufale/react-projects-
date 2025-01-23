import React, { useState } from "react";

const Todo = ({ prop }) => {
  const { todos, setTodos } = prop;
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    let todoObj = {
      id: Date.now(),
      todo: newTodo,
    };
    setTodos((prevtodos) => [...prevtodos, todoObj]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <div>
      <div>
        <label htmlFor="todo"></label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={newTodo}
          onChange={(e) => handleNewTodo(e)}
        />

        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/*  showing todos here  */}
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
