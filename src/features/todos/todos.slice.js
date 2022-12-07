import { createSelector } from "reselect";
import { getNextIdFromArray } from "../../utils/getNextIdFromArray";
import { selectFilters } from "../filters/filters.slice";

const initialState = {
  status: "idle",
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      text: "Check out this default todo",
      completed: false,
      color: "blue",
      dateCreated: Date.now(),
    },
    2: {
      id: 2,
      text: "Check out this default todo with a red background",
      completed: false,
      color: "red",
      dateCreated: Date.now(),
    },
  },
};

/*
 *   Action Type Definitions
 */
export const TODOS_TODO_ADDED = "todos/todoAdded";
export const TODOS_TODO_TOGGLED = "todos/todoToggled";
export const TODOS_ALL_COMPLETED = "todos/allToggled";
export const TODOS_COMPLETED_REMOVED = "todos/completedRemoved";

/*
 *   Action Creators
 */
export const addTodo = (text) => {
  const todo = {
    text,
    completed: false,
    color: "blue",
  };

  return { type: TODOS_TODO_ADDED, payload: todo };
};

export const toggleTodo = (todoId) => {
  return { type: TODOS_TODO_TOGGLED, payload: todoId };
};

export const completeAllTodos = () => {
  return { type: TODOS_ALL_COMPLETED };
};

export const removeCompletedTodos = () => {
  return { type: TODOS_COMPLETED_REMOVED };
};

/*
 *    Reducer
 */
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_TODO_ADDED: {
      const todo = action.payload;
      todo.id = getNextIdFromArray(state.ids);
      return {
        ...state,
        entities: {
          ...state.entities,
          [todo.id]: todo,
        },
        ids: [...state.ids, todo.id],
      };
    }

    case TODOS_TODO_TOGGLED: {
      const todoId = action.payload;
      const todos = state.entities;
      const todo = { ...state.entities[todoId] };

      return {
        ...state,
        entities: {
          ...todos,
          [todoId]: {
            ...todo,
            completed: !todo.completed,
          },
        },
      };
    }

    case TODOS_ALL_COMPLETED: {
      const newEntities = { ...state.entities };

      Object.values(state.entities).forEach(
        (todo) => (newEntities[todo.id] = { ...todo, completed: true })
      );

      return {
        ...state,
        entities: newEntities,
      };
    }

    case TODOS_COMPLETED_REMOVED: {
      const newEntities = { ...state.entities };
      let newIds = [...state.ids];

      Object.values(state.entities).forEach((todo) => {
        if (!newEntities[todo.id].completed) return;

        delete newEntities[todo.id];
        newIds = newIds.filter((id) => id !== todo.id);
      });

      return {
        ...state,
        entities: newEntities,
        ids: newIds,
      };
    }

    default:
      return state;
  }
};

/*
 *    Selectors
 */
export const selectTodos = (state) => state.todos;
export const selectTodoEntities = (state) => state.todos.entities;
export const selectTodoIds = (state) => state.todos.ids;

export const selectFilteredTodos = createSelector(
  selectTodoEntities,
  selectFilters,
  (todos, filters) => {
    const { status } = filters;

    const completedStatus = status === "Completed";
    const incompletedStatus = status === "Incompleted";

    let comparisonValue;

    if (incompletedStatus) comparisonValue = false;
    if (!incompletedStatus) comparisonValue = true;
    if (!completedStatus && !incompletedStatus) return Object.values(todos);

    return Object.values(todos).filter(
      (todo) => todo.completed === comparisonValue
    );
  }
);

export const selectColorFilteredTodos = createSelector(
  selectFilteredTodos,
  selectFilters,
  (todos, filters) => {
    const { colors } = filters;
    if (colors.length === 0) return todos;

    return todos.filter((todo) => colors.includes(todo.color));
  }
);

export const selectFilteredTodoIds = createSelector(
  selectColorFilteredTodos,
  (todos) => todos.map((todo) => todo.id)
);

export const selectTodoById = (state, id) => selectTodoEntities(state)[id];
