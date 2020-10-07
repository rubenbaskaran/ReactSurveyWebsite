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

const allReducers = combineReducers({
  showPreExtraSection: togglePreExtraSectionReducer,
  showPostExtraSection: togglePostExtraSectionReducer,
});

// STORE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
export { togglePreExtraSectionAction, togglePostExtraSectionAction };

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
