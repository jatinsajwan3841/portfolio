import React from "react";
import { PROJECT_DATA } from "./data";
import Indicator from "../techIndicator";
import { AiOutlineStar } from "react-icons/ai";
import "./index.scss";

const Projects = () => {
    return (
        <div className="projects-container">
            {PROJECT_DATA.map((v, i) => (
                <div className="project-item" key={i}>
                    <div className="left">
                        <a
                            href={v.projectLink}
                            className="title"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {v.title}
                        </a>
                        <div className="desc">{v.desc}</div>
                        <div className="tech-used">
                            {v.tech.map((tech, i) => (
                                <Indicator name={tech} key={i} />
                            ))}
                        </div>
                        <div className="time">{v.time}</div>
                    </div>
                    <a
                        href={v.deployedAt}
                        className="right"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiOutlineStar /> Live
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Projects;
