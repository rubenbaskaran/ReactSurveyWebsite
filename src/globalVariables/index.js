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

const randomVideoNumberAction = (data) => {
  return {
    type: "setRandomVideo",
    payload: data,
  };
};

const setVideoWatchedAction = (data) => {
  return {
    type: "setVideoWatched",
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

const setRandomVideoReducer = (state = 0, action) => {
  switch (action.type) {
    case "setRandomVideo":
      return action.payload;
    default:
      return state;
  }
};

const setVideoWatchedReducer = (state = false, action) => {
  switch (action.type) {
    case "setVideoWatched":
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
  randomVideoNumber: setRandomVideoReducer,
  setVideoWatched: setVideoWatchedReducer,
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
  randomVideoNumberAction,
  setVideoWatchedAction,
  setRecordIdAction,
};

// CONSUMER

// import { useSelector, useDispatch } from "react-redux";
// import store, {
//   togglePreExtraSectionAction,
//   togglePostExtraSectionAction,
// } from "../../../globalVariables";

// store.subscribe(() => {
//   console.log(
//     "PRE: " +
//       store.getState().togglePreExtraSection +
//       ". POST: " +
//       store.getState().togglePostExtraSection
//   );
//   console.log();
// });

// const dispatch = useDispatch();
// dispatch(togglePreExtraSectionAction("hello"));
// dispatch(togglePostExtraSectionAction("world"));
// dispatch(togglePreExtraSectionAction("bye"));
// dispatch(togglePostExtraSectionAction("moon"));

// console.log(
//   "useSelector PRE: " + useSelector((state) => state.togglePreExtraSection)
// );

// console.log(
//   "useSelector POST: " + useSelector((state) => state.togglePostExtraSection)
// );
