import { useDispatch } from "react-redux";
import { capitalizeWord } from "../../../utils/capitalizeWord";
import { changeColorFilter } from "../filters.slice";

export const ColorFilter = ({ name, colorCode }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{ background: colorCode }}
      onClick={() => dispatch(changeColorFilter(name))}
    >
      <span>{capitalizeWord(name)}</span>
    </div>
  );
};
