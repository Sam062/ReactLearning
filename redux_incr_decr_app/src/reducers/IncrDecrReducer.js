// Step-2 Defining the actions behaviours

const initialState = 0;

const changeNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return state <= 100 ? state + 1 : state;
    }
    case "DECREMENT":
      return state >= 1 ? state - 1 : state;
    case "RESET": {
      state = 0;
      return state;
    }
    default:
      return state;
  }
};
export default changeNumber;
