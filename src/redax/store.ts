import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from "./recipe/slice"; 

const store = configureStore({
  reducer: {
    recipes: recipeReducer, 
  },
});
export type RootState = ReturnType<typeof store.getState>; 
export default store;