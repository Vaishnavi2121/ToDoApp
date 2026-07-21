import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currtoDoItems, action) => {
  let newTodoItems = currtoDoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currtoDoItems,
      { name: action.payload.name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currtoDoItems.filter(
      (item) => item.name !== action.payload.name,
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        date,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        name: todoItemName,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  return (
    <TodoItemContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
