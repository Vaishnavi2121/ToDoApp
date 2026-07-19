import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoItem todoName={item.name} todoDate={item.date}></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
