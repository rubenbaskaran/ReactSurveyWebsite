import { createStore, combineReducers } from "redux";

// ACTION
const togglePreExtraSectionAction = () => {
  return {
    type: "togglePreExtraSection",
  };
};

const togglePostExtraSectionAction = () => {
  return {
    type: "togglePostExtraSection",
  };
};

// REDUCER
const togglePreExtraSectionReducer = (state = false, action) => {
  switch (action.type) {
    case "togglePreExtraSection":
      return !state;
    default:
      return state;
  }
};

const togglePostExtraSectionReducer = (state = false, action) => {
  switch (action.type) {
    case "togglePostExtraSection":
      return !state;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  togglePreExtraSectionReducer,
  togglePostExtraSectionReducer,
});

// STORE
const store = createStore(allReducers);

export default store;
export { togglePreExtraSectionAction, togglePostExtraSectionAction };
