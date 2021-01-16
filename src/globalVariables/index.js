import { createStore, combineReducers } from "redux";

// ACTION
const togglePreExtraSectionAction = (data) => {
  return {
    type: "togglePreExtraSection",
    payload: data,
  };
};

const togglePostExtraSectionAction = (data) => {
  return {
    type: "togglePostExtraSection",
    payload: data,
  };
};

const setRecordIdAction = (data) => {
  return {
    type: "setRecordId",
    payload: data,
  };
};

// REDUCER
const togglePreExtraSectionReducer = (state = false, action) => {
  switch (action.type) {
    case "togglePreExtraSection":
      return action.payload;
    default:
      return state;
  }
};

const togglePostExtraSectionReducer = (state = false, action) => {
  switch (action.type) {
    case "togglePostExtraSection":
      return action.payload;
    default:
      return state;
  }
};

const setRecordIdReducer = (state = "null", action) => {
  switch (action.type) {
    case "setRecordId":
      return action.payload;
    default:
      return state;
  }
};

const allStates = combineReducers({
  showPreExtraSection: togglePreExtraSectionReducer,
  showPostExtraSection: togglePostExtraSectionReducer,
  recordId: setRecordIdReducer,
});

// STORE
const store = createStore(
  allStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export {
  togglePreExtraSectionAction,
  togglePostExtraSectionAction,
  setRecordIdAction,
};
