import { createStore } from 'redux';

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;


// Yes, in Redux, the state is immutable, which means that once it is created, it cannot be changed directly. Instead, changes to the state are made by creating a new copy of the state object with the updated data.

// Redux achieves immutability by using a programming pattern called "reducers". Reducers are pure functions that take the current state and an action as input and return a new state object that reflects the changes made by the action. Since reducers always return a new state object, they ensure that the state is never mutated directly.

