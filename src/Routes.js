import React from "react";

const Home = React.lazy(() => import("./components/overview"));
const Projects = React.lazy(() => import("./components/projects"));

const routes = [
    {
        path: "/",
        name: "Home",
        element: Home,
    },
    {
        path: "/projects",
        name: "Projects",
        element: Projects,
    },
];

export default routes;
