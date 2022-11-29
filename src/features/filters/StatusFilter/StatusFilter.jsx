import { useDispatch } from "react-redux";
import { changeFilterStatus } from "../filtersSlice";

export const StatusFilter = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => dispatch(changeFilterStatus(name))}>{name}</span>
    </div>
  );
};
