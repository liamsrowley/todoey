import { useDispatch, useSelector } from "react-redux";
import { filterColors } from "../../filters/FiltersList/FiltersList";
import { selectTodoById, toggleTodo } from "../todos.slice";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => selectTodoById(state, id));

  const onCheckboxChange = (e) => {
    dispatch(toggleTodo(id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.code === "Space") onCheckboxChange();
  };

  return (
    <div className={styles.todo} onClick={onCheckboxChange}>
      <div
        className={styles["todo__color"]}
        style={{ background: filterColors[todo.color] }}
      />
      <div
        tabIndex="0"
        className={
          todo.completed
            ? `${styles["todo__checkbox"]} ${styles["todo__checkbox--checked"]}`
            : styles["todo__checkbox"]
        }
        checked={todo.completed}
        onClick={onCheckboxChange}
        onKeyDown={handleKeyDown}
      >
        {todo.completed && <span />}
      </div>
      {todo.text}
    </div>
  );
};
