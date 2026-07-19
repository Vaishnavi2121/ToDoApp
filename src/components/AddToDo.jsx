function AddToDo() {
  return (
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter your ToDo" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button kg-button" className="btn btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default AddToDo;
