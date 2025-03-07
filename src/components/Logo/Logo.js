import { jsx as _jsx } from "react/jsx-runtime";
import { Link } from "react-router";
import CSS from "./Logo.module.css";
export default function Logo() {
    return (_jsx("div", { className: CSS.wrapper, children: _jsx(Link, { to: "/", children: _jsx("img", { src: "/public/logo.webp", alt: "logo image", className: CSS.logo }) }) }));
}
