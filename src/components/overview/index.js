import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { DATA } from "./data";
import { IoIosGitBranch } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFileEarmark } from "react-icons/bs";
import "./index.scss";

const Overview = () => {
    const [mdData, setMdData] = React.useState(DATA[0]);
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
                        <span>Cheerful</span>
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
                    {DATA.map((v, i) => (
                        <div
                            key={i}
                            className="tr selector"
                            onClick={() => setMdData(DATA[i])}
                        >
                            <BsFileEarmark />
                            <span> {v.head} </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="overview-table file-container">
                <div className="table-head file-head">{mdData.head}</div>
                <div className="tr file-data">
                    <ReactMarkdown
                        children={mdData.content}
                        skipHtml={false}
                        rehypePlugins={[rehypeRaw]}
                    />{" "}
                </div>
            </div>
        </div>
    );
};

export default Overview;
