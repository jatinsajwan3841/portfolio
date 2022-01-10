import React from "react";

const Home = React.lazy(() => import("./components/overview"));
const Projects = React.lazy(() => import("./components/projects"));
const Skills = React.lazy(() => import("./components/skills"));
const WorkEx = React.lazy(() => import("./components/workEx"));

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
    {
        path: "/skill&achieve",
        name: "skill&achieve",
        element: Skills,
    },
    {
        path: "/experience",
        name: "experience",
        element: WorkEx,
    },
];

export default routes;
