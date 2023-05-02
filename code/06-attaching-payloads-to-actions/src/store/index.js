import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    console.log("executing action type increment")
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'increase') {
    console.log('executing action type increase');
    return {
      counter: state.counter + action.amount,
    };
  }

  if (action.type === 'decrement') {
    console.log('executing action type decrement');
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

store.subscribe(() => console.log("state changed"))

export default store;