import { Flex } from "../../../components/flex/Flex";
import { ColorFilter } from "../ColorFilter/ColorFilter";
import { StatusFilter } from "../StatusFilter/StatusFilter";

import styles from "./FiltersList.module.css";

const filterStatuses = ["All", "Completed", "Incompleted"];
export const filterColors = {
  red: "#e63535",
  green: "#2bbd30",
  blue: "#567de8",
};

export const FiltersList = () => {
  const renderedStatuses = filterStatuses.map((status) => (
    <StatusFilter key={status} name={status} />
  ));

  const renderedColors = Object.keys(filterColors).map((color) => (
    <ColorFilter key={color} name={color} colorCode={filterColors[color]} />
  ));

  return (
    <Flex direction="row" gap="20px">
      <div className={styles["filters__item"]}>
        <p>Status</p>
        {renderedStatuses}
      </div>
      <div className={styles["filters__item"]}>
        <p>Colors</p>
        <Flex direction="row" gap="4px">
          {renderedColors}
        </Flex>
      </div>
    </Flex>
  );
};
