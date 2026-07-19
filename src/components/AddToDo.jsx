import { useState } from "react";

function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="row kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter your ToDo"
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" value={todoDate} onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button kg-button"
          className="btn btn-success"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
