// Step-1 Defining Actions which returhs pure object

export const incrNumber = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrNumber = () => {
  return {
    type: "DECREMENT",
  };
};
export const reset = () => {
  return {
    type: "RESET",
  };
};
