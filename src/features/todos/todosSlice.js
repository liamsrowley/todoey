import { createSelector } from "reselect";
import { selectFilters } from "../filters/filtersSlice";

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
export const TODOS_ALL_TOGGLED = "todos/allToggled";
export const TODOS_COMPLETED_REMOVED = "todos/completedRemoved";

/*
 *   Action Creators
 */
export const addTodo = (text) => {
  const todo = {
    id: Math.floor(Math.random() * 1000 + Date.now()),
    text,
    completed: false,
    color: "blue",
  };

  return { type: TODOS_TODO_ADDED, payload: todo };
};

export const toggleTodo = (todoId) => {
  return { type: TODOS_TODO_TOGGLED, payload: todoId };
};

export const toggleAllTodos = () => {
  return { type: TODOS_ALL_TOGGLED };
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

    case TODOS_ALL_TOGGLED: {
      const newEntities = { ...state.entities };

      Object.values(state.entities).forEach(
        (todo) =>
          (newEntities[todo.id] = { ...todo, completed: !todo.completed })
      );

      return {
        ...state,
        entities: newEntities,
      };
    }

    case TODOS_COMPLETED_REMOVED: {
      const newEntities = { ...state.entities };

      Object.values(state.entities).forEach((todo) => {
        if (newEntities[todo.id].completed) delete newEntities[todo.id];
      });

      return {
        ...state,
        entities: newEntities,
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

    if (!completedStatus) return Object.values(todos);

    console.log(completedStatus);

    return Object.values(todos).filter(
      (todo) => todo.completed === completedStatus
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
