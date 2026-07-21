import styles from "./WelcomeMessage.module.css";
import { TodoItemContext } from "../store/todo-items-store";
import { useContext } from "react";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>Enjoy ur day off!!!</p>
    )
  );
};

export default WelcomeMessage;
