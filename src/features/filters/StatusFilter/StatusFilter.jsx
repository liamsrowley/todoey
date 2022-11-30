import { useDispatch } from "react-redux";
import { changeFilterStatus } from "../filters.slice";

export const StatusFilter = ({ name }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span onClick={() => dispatch(changeFilterStatus(name))}>{name}</span>
    </div>
  );
};
