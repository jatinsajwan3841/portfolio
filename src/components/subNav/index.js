import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const data = [
    {
        name: "Overview",
        link: "/",
    },
    {
        name: "Projects",
        link: "/projects",
    },
    {
        name: "Work Experience",
        link: "/experience",
    },
    {
        name: "Skills and Achievement",
        link: "/skill&achieve",
    },
];

const SubNav = () => {
    return (
        <div className="sub-nav-container">
            {data.map((val, ind) => (
                <NavLink
                    to={val.link}
                    className="nav-item"
                    activestyle="active"
                    key={ind}
                >
                    {val.name}
                </NavLink>
            ))}
        </div>
    );
};

export default SubNav;
