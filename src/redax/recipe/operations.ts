
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'www.themealdb.com/api/json/v1/1';

export const fetchRecipe = createAsyncThunk(
    "recipe/fetch",
    async ({ category, search }: { category?: string; search?: string }, thunkAPI) => {
      try {
        let url = "/search.php?s="; // Базовий URL для пошуку
        let params = {};
  
        if (search) {
            params = { s: search.trim() };
          } else if (category) {
            // Якщо є категорія (але немає пошуку)
            url = "/filter.php";
            params = { c: category.trim() };
          } else {
            // Якщо немає пошуку або категорії, виводимо рецепти за замовчуванням (наприклад, літери "a")
            url = "/search.php?f=a"; // Сортуємо за літерою "a" або іншою, якщо потрібно
          }
  
        const { data } = await axios.get(url, { params });
        return data.meals || []; // Повертаємо масив рецептів або пустий масив
      } catch (error: unknown) {
        // Перевіряємо тип error, щоб уникнути помилки типу "unknown"
        if (error instanceof Error) {
          return thunkAPI.rejectWithValue(error.message);
        }
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  );

// export const fetchCamperID = createAsyncThunk('/campers/fetchID', async (id, thunkAPI) => {
//   try {
//     const { data } = await axios.get(`/campers/${id}`);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });