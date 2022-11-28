import { useDispatch } from "react-redux";
import { changeColorFilter, changeFilterStatus } from "./filtersSlice";

export const FiltersList = () => {
  const dispatch = useDispatch();

  const handleFilterByCompleted = () => {
    dispatch(changeFilterStatus("Completed"));
  };

  const handleFilterByColor = () => {
    const colors = ["red", "blue", "green", "black"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    dispatch(changeColorFilter(colors[randomIndex]));
  };

  return (
    <div>
      <button onClick={handleFilterByCompleted}>Filter by completed</button>
      <button onClick={handleFilterByColor}>Filter by random color</button>
    </div>
  );
};
