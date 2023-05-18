import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// A hook to access the redux store's state. This hook takes a selector function as an argument.
// The selector is called with the store state.

// This hook takes an optional equality comparison function as the second parameter that allows
// you to customize the way the selected state is compared to determine whether the 
// component needs to be re-rendered.

