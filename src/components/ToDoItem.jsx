function ToDoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button kg-button"
          className="btn btn-danger"
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
