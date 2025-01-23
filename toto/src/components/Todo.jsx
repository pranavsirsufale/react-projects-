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
      done: false,
    };
    setTodos((prevtodos) => [...prevtodos, todoObj]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((obj) => obj.id !== id));
  };

  const handleMarkDone = (id) => {
    setTodos((prevArray) =>
      prevArray.map((currObj) =>
        currObj.id === id ? { ...currObj, done: !currObj.done } : currObj
      )
    );
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
              {/*  ADDED STRIKE THROUGH OVER HERE  */}
              {/* {
                    todo.done ? 
                    <s>
                        {
                            todo.todo
                        }
                    </s>
                    
                    : todo.todo
                } */}

              {todo.todo}

              {todo.done ? "✅" : "❌"}

              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleMarkDone(todo.id)}>
                {" "}
                Mark as
                {todo.done ? "Done" : "Undone"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
