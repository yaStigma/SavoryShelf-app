import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import CSS from "./Dashboard.module.css";
export default function Dashboard() {
    return (_jsxs("div", { className: CSS.wrapper, children: [_jsx(SearchBar, {}), _jsx(Filter, {})] }));
}
