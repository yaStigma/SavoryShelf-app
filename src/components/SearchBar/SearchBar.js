import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipe } from "../../redax/recipe/operations";
import CSS from "./SearchBar.module.css";
export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            dispatch(fetchRecipe({ search: searchTerm }));
        }
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: CSS.searchForm, children: [_jsx("label", { children: "Search for a recipe:" }), _jsx("input", { type: "text", value: searchTerm, onChange: handleChange, className: CSS.input }), _jsx("button", { type: "submit", className: CSS.btn, children: "Search" })] }));
}
