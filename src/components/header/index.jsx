import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <div className="logo" />
                <div className="header-name">Jatin Sajwan</div>
            </Link>
        </div>
    );
};

export default Header;
