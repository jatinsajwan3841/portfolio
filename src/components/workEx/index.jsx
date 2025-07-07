import Indicator from "../techIndicator";
import { WORKEX_DATA } from "./data";
import "../projects/index.scss";

const WorkEx = () => {
    return (
        <div className="work-container projects-container">
            {WORKEX_DATA.map((v, i) => (
                <div className="project-item" key={i}>
                    <div className="left">
                        <div className="title">{v.role}</div>
                        <div className="company">@ {v.company}</div>
                        <div
                            className="desc"
                            dangerouslySetInnerHTML={{ __html: v.desc }}
                        ></div>
                        <div className="tech-used">
                            {v.tech.map((tech, i) => (
                                <Indicator name={tech} key={i} />
                            ))}
                        </div>
                        <div className="time">{v.time}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WorkEx;
