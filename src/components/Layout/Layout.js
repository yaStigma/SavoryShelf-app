import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from "react";
import { Outlet } from "react-router";
import CSS from "./Layout.module.css";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";
import Dashboard from "../Dashboard/Dashboard";
export default function Layout() {
    return (_jsxs("div", { className: CSS.wrapper, children: [_jsxs("header", { className: CSS.header, children: [_jsx(Logo, {}), _jsx(Header, {})] }), _jsxs("main", { className: CSS.mainWrapper, children: [_jsx("div", { className: CSS.dashboard, children: _jsx(Dashboard, {}) }), _jsx("div", { className: CSS.content, children: _jsx(Suspense, { fallback: null, children: _jsx(Outlet, {}) }) })] })] }));
}
