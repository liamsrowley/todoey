import { useDispatch } from "react-redux";
import { changeColorFilter } from "../filters.slice";

import styles from "./ColorFilter.module.css";

export const ColorFilter = ({ name, colorCode }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ background: colorCode }}
      onClick={() => dispatch(changeColorFilter(name))}
      className={styles["color-filter"]}
    />
  );
};
