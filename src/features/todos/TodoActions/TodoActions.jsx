import { useDispatch } from "react-redux";
import { Button } from "../../../components/button/Button";
import { Flex } from "../../../components/flex/Flex";
import { completeAllTodos, removeCompletedTodos } from "../todos.slice";

export const TodoActions = () => {
  const dispatch = useDispatch();

  return (
    <Flex direction="row" gap="12px">
      <Button onClick={() => dispatch(completeAllTodos())}>Complete All</Button>
      <Button onClick={() => dispatch(removeCompletedTodos())}>
        Clear Completed
      </Button>
    </Flex>
  );
};
