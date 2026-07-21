import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const ToDoItems = ({ onDeleteClick }) => {
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.todoItems;

  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
