import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemContext } from "./store/todo-items-store";
import { useContext } from "react";

function App() {
  const [todoItems, setTodoitems] = useState([]);

  const addNewItem = (name, date) => {
    setTodoitems((currValue) => [...currValue, { name, date }]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoitems(newTodoItems);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddToDo />
        <WelcomeMessage></WelcomeMessage>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemContext.Provider>
  );
}
export default App;
