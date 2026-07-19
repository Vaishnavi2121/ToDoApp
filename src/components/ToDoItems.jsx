import ToDoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemContainer}>
      {todoItems.map((item) => (
        <ToDoItem
          todoName={item.name}
          todoDate={item.date}
          onDeleteClick={onDeleteClick}
        ></ToDoItem>
      ))}
    </div>
  );
};

export default ToDoItems;
