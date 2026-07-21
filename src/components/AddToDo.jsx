import { useState, useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function AddToDo() {
  const { addNewItem } = useContext(TodoItemContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    addNewItem(todoName, todoDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <form className="row kg-row" onSubmit={handleAddButtonClicked}>
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter your ToDo"
        />
      </div>
      <div className="col-4">
        <input type="date" ref={dueDateElement} />
      </div>
      <div className="col-2">
        <button type="button kg-button" className="btn btn-success">
          <BiMessageAdd />
        </button>
      </div>
    </form>
  );
}

export default AddToDo;
