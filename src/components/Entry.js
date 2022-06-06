import Skill from "./Skill";
import "./Entry.css";

const createSkill = (skill, index) => {
  return <Skill key={index} skill={skill} />;
};

const Entry = (props) => {
  return (
    <div className="entry">
      <div className="heading">
        <h1>{props.cname}</h1>
        <p>
          <i class="fa-solid fa-location-dot"></i> {props.location}
        </p>
      </div>
      <div>
        <h3>Role:&nbsp;&nbsp;{props.role}</h3>
      </div>
      <div className="skills">
        <h3>Skills required</h3>
        <div className="skill">{props.skills.map(createSkill)}</div>
      </div>
      <div>
        {props.experience === 0 ? (
          <h3>Fresher Opening</h3>
        ) : (
          <h3>Minimum experience required: {props.experience}</h3>
        )}
      </div>
    </div>
  );
};

export default Entry;
