import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RecipeList from "../../components/RecipeList/RecipeList";
import CSS from "./HomePage.module.css";
export default function HomePage() {
    return (_jsxs("div", { className: CSS.wrapper, children: [_jsx("h2", { children: "Pecipe List" }), _jsx(RecipeList, {})] }));
}
;
