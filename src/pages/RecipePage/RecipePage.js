import { jsx as _jsx } from "react/jsx-runtime";
// import RecipeDetail from "../../components/RecipeDetail/RecipeDetail"
import CSS from "./RecipePage.module.css";
export default function RecipePage() {
    return (_jsx("div", { className: CSS.wrapper, children: _jsx("p", { children: "Recipe details" }) }));
}
;
