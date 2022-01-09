import React from "react";
import { IoIosGitBranch } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFileEarmark } from "react-icons/bs";
import "./index.scss";
const Overview = () => {
    return (
        <div className="overview-container">
            <div className="overview-head">
                <div className="left">
                    <div className="tabs branch-select">
                        <IoIosGitBranch />
                        <span>main</span>
                        <AiOutlineCaretDown />
                    </div>
                    <div className="tabs hidden">
                        <IoIosGitBranch /> ECE branch
                    </div>
                    <div className="tabs hidden">
                        <BsTag />
                        <span>hardworking</span>
                    </div>
                </div>
                <a
                    href="https://drive.google.com/file/d/1nyYyiDb19-h69O9MaUWJkROju66FqElo/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="resume-link"
                >
                    <button className="resume-btn">
                        Resume
                        <AiOutlineCaretDown />
                    </button>
                </a>
            </div>
            <div className="overview-table">
                <div className="table-head">
                    <img
                        className="commit-dp"
                        alt="display-pic"
                        src="https://avatars.githubusercontent.com/u/58560850"
                    />
                    <span className="commit-user">jatin3841</span>
                    <span className="commit-msg">updated knowledge...</span>
                </div>
                <div className="table-body">
                    <div className="tr">
                        <BsFileEarmark />
                        <span> Overview.md </span>
                    </div>
                    <div className="tr">
                        <BsFileEarmark />
                        <span> About.md </span>
                    </div>
                </div>
            </div>
            <div className="overview-table file-container">
                <div className="table-head file-head">Overview.md</div>
                <div className="tr file-data">check</div>
            </div>
        </div>
    );
};

export default Overview;
