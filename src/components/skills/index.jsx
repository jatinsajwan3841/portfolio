import React from "react";
import Indicator from "../techIndicator";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { SKILLS_DATA } from "./data";
import { ACHIEVE_DATA } from "./data";
import "./index.scss";

const Skills = () => {
    return (
        <div className="skills-container">
            <div className="divider-copy">
                <div className="title">Technical Skills</div>
                <div className="data-box-container">
                    {SKILLS_DATA.map((v, i) => (
                        <div className="data-box" key={i}>
                            <div className="heading">
                                <BsFillJournalBookmarkFill />
                                {v.header}
                            </div>
                            <div className="body">
                                {v.body.map((tech, i) => (
                                    <Indicator name={tech} key={i} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="divider-copy">
                <div className="title">Achievements</div>
                <div className="timeline">
                    {ACHIEVE_DATA.map((v, i) => (
                        <div className="time-card" key={i}>
                            <div className="time">{v.time}</div>
                            <div className="title">{v.title}</div>
                            <div className="body">{v.body}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
