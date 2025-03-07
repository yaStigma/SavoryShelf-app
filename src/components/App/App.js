import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "../Layout/Layout";
export default function App() {
    const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
    const RecipePage = lazy(() => import("../../pages/RecipePage/RecipePage"));
    const RecipesShelf = lazy(() => import("../../pages/RecipesShelf/RecipesShelf"));
    const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
    return (_jsx(_Fragment, { children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(HomePage, {}) }), _jsx(Route, { path: "recipe/:id", element: _jsx(RecipePage, {}) }), _jsx(Route, { path: "recipesShelf", element: _jsx(RecipesShelf, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }) }) }) }));
}
