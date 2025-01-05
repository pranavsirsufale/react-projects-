import React, { useState } from "react";
import { addTodo, updateTodo } from "../features/Todo/TodoSlice";
import { useDispatch } from "react-redux";
import Todos from "./Todos";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isUpdate, setIsUpDated] = useState(true);

  const [toUpdate, setToUpdate] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const updateHandler = (e,id,text) => {
    e.preventDefault()
    dispatch(updateTodo(id,text))
    setToUpdate('')
    setIsUpDated((prev)=> !prev)

  }

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        { isUpdate ? (
          <input
            type="text"
            className="bg-yellow-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Update the Todo..."
            value={input}
            onChange={(e) => setToUpdate(e.target.value)}
          />
        ) : (
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        )}

        {
          isUpdate ? 
          (
            <button
          type="submit"
          className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Update Todo
        </button>
          ): 
          (
            <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
          )
        }
      </form>

      <div>
        <Todos />
      </div>
    </>
  );
};

export default AddTodo;
