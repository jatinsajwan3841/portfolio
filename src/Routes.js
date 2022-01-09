import React from "react";

const Home = React.lazy(() => import("./components/overview"));

const routes = [
    {
        path: "/",
        name: "Home",
        element: Home,
    },
];

export default routes;
