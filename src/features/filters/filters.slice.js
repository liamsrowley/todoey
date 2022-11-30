const initialState = {
  status: "All",
  sortBy: "date",
  orderBy: "asc",
  colors: [],
};

/*
 *   Action Type Definitions
 */
export const FILTERS_FILTER_STATUS_CHANGED = "filters/filterStatusChanged";
export const FILTERS_COLORS_CHANGED = "filters/filterColorsChanged";

/*
 *   Action Creators
 */
export const changeFilterStatus = (status) => {
  return { type: FILTERS_FILTER_STATUS_CHANGED, payload: status };
};

export const changeColorFilter = (color) => {
  return { type: FILTERS_COLORS_CHANGED, payload: color };
};

/*
 *    Reducer
 */
export const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERS_FILTER_STATUS_CHANGED: {
      return {
        ...state,
        status: action.payload,
      };
    }

    case FILTERS_COLORS_CHANGED: {
      let newColors = [];

      if (state.colors.includes(action.payload)) {
        newColors = state.colors.filter((color) => color !== action.payload);
      } else {
        newColors = [...state.colors, action.payload];
      }

      return {
        ...state,
        colors: newColors,
      };
    }

    default:
      return state;
  }
};

/*
 *    Selectors
 */
export const selectFilters = (state) => state.filters;
