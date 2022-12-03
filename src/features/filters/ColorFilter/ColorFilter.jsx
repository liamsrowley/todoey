import { useDispatch, useSelector } from "react-redux";
import { changeColorFilter } from "../filters.slice";

import styles from "./ColorFilter.module.css";

export const ColorFilter = ({ name, colorCode }) => {
  const dispatch = useDispatch();

  const activeColors = useSelector((state) => state.filters.colors);

  const isActive = activeColors.includes(name);

  return (
    <div
      style={{ background: colorCode }}
      onClick={() => dispatch(changeColorFilter(name))}
      className={
        isActive
          ? `${styles["color-filter"]} ${styles["color-filter--active"]}`
          : styles["color-filter"]
      }
    />
  );
};
