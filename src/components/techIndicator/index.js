import { TECH_MAPPING } from "./constant";
import "./index.scss";

const Indicator = ({ name }) => (
    <div className="indicator-container">
        <span
            className="indicator"
            style={{ backgroundColor: TECH_MAPPING[name] }}
        />
        <span className="tech-name">{name}</span>
    </div>
);
export default Indicator;
