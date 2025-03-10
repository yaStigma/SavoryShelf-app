import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redax/store";
import { fetchRecipe } from "../../redax/recipe/operations";
import { selectRecipeState } from "../../redax/recipe/selectors";

import CSS from "./RecipeList.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";
export default function RecipeList() {
  const dispatch = useDispatch<AppDispatch>();
  const { meals, status } = useSelector(selectRecipeState);

  useEffect(() => {
    dispatch(fetchRecipe({ category: "", search: "" }));
  }, [dispatch]);
  console.log("Fetched meals in RecipeList:", meals);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className={CSS.wrapperList}>
      <ul>
        {meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal} className={CSS.box}>
              <RecipeCard meal={meal} />
            </li>
          ))
        ) : (
          <li>No Recipes found</li>
        )}
      </ul>
    </div>
  );
}
