import Skill from "./Skill";
import { ToolsArray, SkillsArray } from "./Skills.data";

const Skills = () => {
  return (
    <section className="mb-8">
      <h2 className="heading">Skills</h2>
      <section className="grid md:grid-cols-2">
        <section className="mb-5 md:mb-0">
          <h3 className="text-2xl text-white-300 font-m mb-2">
            Web Development
          </h3>
          <section className="grid grid-cols-3 gap-1">
            {SkillsArray.map((skill, index) => (
              <Skill
                index={index}
                key={skill.name}
                url={skill.url}
                name={skill.name}
              />
            ))}
          </section>
        </section>
        <section className="mb-5 md:mb-0">
          <h3 className="text-2xl text-white-300 font-m mb-2">
            Tools & Technologies
          </h3>
          <section className="grid grid-cols-2">
            {ToolsArray.map(tool => (
              <Skill key={tool.name} url={tool.url} name={tool.name} />
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Skills;
