import React from "react";

const ContextData = React.createContext({
  firstExtraSection: "hide",
  setFirstExtraSection: () => {},
});

// const SecondSectionContext = React.createContext({
//   secondExtraSection: "hide",
//   setSecondExtraSection: () => {},
// });

// export { FirstSectionContext, SecondSectionContext };
export default ContextData;
