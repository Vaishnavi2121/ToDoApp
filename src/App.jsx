import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
    {
      name: "Buy Milk",
      date: "4/10/2023",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems={todoItems}></ToDoItems>
    </center>
  );
}
export default App;
