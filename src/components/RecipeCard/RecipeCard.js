import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CSS from "./RecipeCard.module.css";
import { Link } from "react-router";
export default function RecipeCard({ meal }) {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = meal;
    return (_jsxs("div", { className: CSS.wrapperCard, children: [_jsx("img", { src: strMealThumb, alt: strMeal, className: CSS.image }), _jsxs("div", { className: CSS.cardInfo, children: [_jsxs("p", { className: CSS.location, children: ["Country: ", strArea] }), _jsx("h3", { className: CSS.name, children: strMeal }), _jsxs("p", { className: CSS.category, children: ["Category: ", strCategory] }), _jsx(Link, { to: `recipe/${idMeal}`, children: _jsx("button", { type: "button", className: CSS.btn, children: "Read more" }) })] })] }));
}
