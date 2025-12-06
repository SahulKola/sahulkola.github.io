import { ISkill } from "./Skills.data";
const Skill = ({ name, url, index }: ISkill) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="300"
      data-aos-delay={index! * 50}
      className="flex flex-col items-center justify-center mb-2"
    >
      <span className="text-white-400 text-3xl md:text-5xl hover:text-white-100 transition-colors">
        {url}
      </span>
      <p className="text-sm md:text-lg font-m text-white-200 mt-2">{name}</p>
    </div>
  );
};

export default Skill;
