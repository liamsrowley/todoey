import { useDispatch, useSelector } from "react-redux";
import { changeFilterStatus } from "../filters.slice";

import styles from "./StatusFilter.module.css";

export const StatusFilter = ({ name }) => {
  const dispatch = useDispatch();
  const filterStatus = useSelector((state) => state.filters.status);

  const isActiveFilter = filterStatus === name;

  return (
    <div
      className={
        isActiveFilter
          ? `${styles["filter"]} ${styles["filter--active"]}`
          : styles.filter
      }
    >
      <span onClick={() => dispatch(changeFilterStatus(name))}>{name}</span>
    </div>
  );
};
