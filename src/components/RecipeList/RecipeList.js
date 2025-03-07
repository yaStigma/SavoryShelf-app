import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipe } from "../../redax/recipe/operations";
import { selectRecipeState } from "../../redax/recipe/selectors";
import CSS from "./RecipeList.module.css";
import RecipeCard from "../RecipeCard/RecipeCard";
export default function RecipeList() {
    const dispatch = useDispatch();
    const { meals, status } = useSelector(selectRecipeState);
    useEffect(() => {
        dispatch(fetchRecipe({ category: "", search: "" }));
    }, [dispatch]);
    console.log("Fetched meals in RecipeList:", meals);
    if (status === "loading") {
        return _jsx("div", { children: "Loading..." });
    }
    if (status === "failed") {
        return _jsx("div", { children: "Something went wrong!" });
    }
    return (_jsx("div", { className: CSS.wrapperList, children: _jsx("ul", { children: meals.length > 0 ? (meals.map((meal) => (_jsx("li", { className: CSS.box, children: _jsx(RecipeCard, { meal: meal }) }, meal.idMeal)))) : (_jsx("li", { children: "No Recipes found" })) }) }));
}
