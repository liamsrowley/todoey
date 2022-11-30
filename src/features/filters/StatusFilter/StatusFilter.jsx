import { useDispatch } from "react-redux";
import { changeFilterStatus } from "../filters.slice";

import styles from "./StatusFilter.module.css";

export const StatusFilter = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <span onClick={() => dispatch(changeFilterStatus(name))}>{name}</span>
    </div>
  );
};
