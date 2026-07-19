import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoitems] = useState([]);
  const handleNewItem = (name, date) => {
    console.log(name, date);
    const newTodoItems = [...todoItems, { name, date }];
    setTodoitems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></ToDoItems>
    </center>
  );
}
export default App;
