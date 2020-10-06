import { createStore } from "redux";

// ACTION
const togglePreExtraSectionAction = () => {
  return {
    type: "togglePreExtraSection",
  };
};

// REDUCER
const togglePreExtraSectionReducer = (state = false, action) => {
  switch (action.type) {
    case "togglePreExtraSection":
      return !state;
  }
};

// STORE
let store = createStore(togglePreExtraSectionReducer);

export default store;
export { togglePreExtraSectionAction };
