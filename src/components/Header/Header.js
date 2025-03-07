import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { NavLink } from "react-router";
import CSS from "./Header.module.css";
const getNavLinkClass = ({ isActive }) => {
    return clsx(CSS.link, isActive && CSS.active);
};
export default function Header() {
    return (_jsxs("nav", { className: CSS.wrapper, children: [_jsx(NavLink, { to: "/", className: getNavLinkClass, children: "All recipes" }), _jsx(NavLink, { to: "/recipesShelf", className: getNavLinkClass, children: "Your recipes Shelf" })] }));
}
