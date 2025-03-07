import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipe, fetchRecipeById, fetchCategories } from "./operations";
const initialState = {
    meals: [],
    recipe: null,
    categories: [],
    status: 'idle',
    error: null,
};
const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipe.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchRecipe.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.meals = action.payload;
            state.error = null;
        })
            .addCase(fetchRecipe.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })
            .addCase(fetchCategories.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.categories = action.payload;
        })
            .addCase(fetchCategories.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        })
            .addCase(fetchRecipeById.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchRecipeById.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.recipe = action.payload;
            state.error = null;
        })
            .addCase(fetchRecipeById.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload instanceof Error ? action.payload.message : 'An error occurred';
        });
    },
});
export default recipeSlice.reducer;
