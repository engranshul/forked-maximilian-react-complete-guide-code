import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

// amazing concept of how we created separate slices in different files
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
