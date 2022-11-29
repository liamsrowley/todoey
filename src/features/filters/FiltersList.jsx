import { useDispatch } from "react-redux";
import { changeFilterStatus } from "./filtersSlice";

export const FiltersList = () => {
  const dispatch = useDispatch();

  const handleFilterByStatus = (status) => {
    dispatch(changeFilterStatus(status));
  };

  return (
    <div>
      <p>Status</p>
      <div>
        <span onClick={() => handleFilterByStatus("All")}>All</span>
      </div>
      <div>
        <span onClick={() => handleFilterByStatus("Completed")}>Completed</span>
      </div>
    </div>
  );
};
