import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipe = createAsyncThunk(
  "recipe/fetch",
  async (
    { category, search }: { category?: string; search?: string },
    thunkAPI
  ) => {
    try {
      let url = "/search.php?s=";
      let params = {};

      if (search) {
        params = { s: search.trim() };
      } else if (category) {
        url = "/filter.php";
        params = { c: category.trim() };
      } else {
        url = "/search.php?f=a";
      }
      const { data } = await axios.get(url, { params });

      return data.meals || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }

      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "recipe/fetchCategories",
  async () => {
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      return response.data.meals; // Повертаємо список категорій
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
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
