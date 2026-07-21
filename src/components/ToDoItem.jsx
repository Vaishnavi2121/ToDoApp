import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";

function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemContext);

  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button kg-button"
          className="btn btn-danger"
          onClick={() => deleteItem(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
