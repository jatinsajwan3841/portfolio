import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import SubNav from "../subNav";
import Loader from "../loader";
import routes from "../../Routes";
import "./index.scss";

const menu = routes.map((route, index) => (
    <Route
        key={index}
        path={route.path}
        name={route.name}
        element={<route.element />}
    />
));

const Content = () => {
    return (
        <div className="container">
            <div className="layout-left">
                <img
                    className="dp"
                    alt="display-pic"
                    src="https://avatars.githubusercontent.com/u/58560850"
                />
                <div>
                    <div className="name">Jatin Sajwan</div>
                    <div className="username">jatin3841</div>
                </div>
                <a
                    href="https://drive.google.com/file/d/1nyYyiDb19-h69O9MaUWJkROju66FqElo/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-link"
                >
                    <button className="resume-btn">Download Resume</button>
                </a>
                <div className="tag-line">
                    Systems Engineer @ TCS Digital || GBPIET '22 || SSGK '18
                </div>
                <div className="address">
                    <MdOutlineLocationOn /> Uttarakhand, India
                </div>
                <a href="mailto:jatinsajwan@hotmail.com" className="email">
                    <MdOutlineEmail /> jatinsajwan@hotmail.com
                </a>
            </div>
            <div className="layout-right">
                <SubNav />
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {menu}
                        <Route
                            path="*"
                            element={<div>404 page not found</div>}
                        />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};
export default Content;
