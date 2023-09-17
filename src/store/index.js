import { createStore } from "redux";

const initialState = {
  counter: 0,
}; 

const reducerFunction = (state = initialState, action) => {
  //we can only include Synchronus functions
  //We should not mutate the original state
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if(action.type==="ADD"){
    return{counter:state.counter+action.payload}
  }
  return state;
};

const store = createStore(reducerFn);
export default store;
