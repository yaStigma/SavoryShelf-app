import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchRecipe } from "../../redax/recipe/operations";
import { selectCategories } from "../../redax/recipe/selectors";
import CSS from "./Filter.module.css";
export default function Filter() {
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    const handleCategoryChange = (category) => {
        dispatch(fetchRecipe({ category }));
    };
    return (_jsxs("div", { className: CSS.filterContainer, children: [_jsx("label", { htmlFor: "categorySelect", children: "Select a Category:" }), _jsxs("select", { id: "categorySelect", onChange: (e) => handleCategoryChange(e.target.value), className: CSS.select, children: [_jsx("option", { value: "", children: "Choose a category" }), categories.map((category) => (_jsx("option", { value: category.strCategory, children: category.strCategory }, category.strCategory)))] })] }));
}
