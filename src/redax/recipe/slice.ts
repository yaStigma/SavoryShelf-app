import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRecipe } from "./operations"; 

interface Meal {
    idMeal: string;
    strMeal: string;
    strMealAlternate: string;
    strCategory: string;
    strArea:string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;    
    strIngredient16: string;
    strIngredient17: string;
    strIngredient18: string;
    strIngredient19: string;
    strIngredient20: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strMeasure16: string;
    strMeasure17: string;
    strMeasure18: string;
    strMeasure19: string;
    strMeasure20: string;
    strSource: string;
    strImageSource: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
  }

  interface RecipeState {
    meals: Meal[]; // Замінили any[] на Meal[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  const initialState: RecipeState = {
    meals: [],
    status: 'idle',
    error: null,
  };
const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    // Ви можете додати свої додаткові редюсери, якщо потрібно
  },
  extraReducers: (builder) => {
    builder
      // Створюємо редюсер для успішного виконання запиту
      .addCase(fetchRecipe.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRecipe.fulfilled, (state, action: PayloadAction<Meal[]>) => {
        state.status = 'succeeded';
        state.meals = action.payload;
        state.error = null;
      })
      // Обробка помилки при запиті
      .addCase(fetchRecipe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default recipeSlice.reducer;