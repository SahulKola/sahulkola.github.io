import { Link } from "react-router-dom";
import { IWorkExp, workExp } from "../../data";

const WorkComponent = () => {
  return (
    <section className="basis-1/2">
      <h2 className="heading">Work Experience</h2>
      {[...workExp].reverse().map((work: IWorkExp, index) => (
        <section
          key={work.id}
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay={index * 100}
          className="text-white-100 border-solid border-l-2 border-b-2 border-grey-100 border-b-grey-400 ml-4 pt-3 mb-0 first-of-type:p-0 last-of-type:mb-3"
        >
          <section className="flex justify-start items-center">
            <p className="year -ml-4">{work.year}</p>
            <Link
              className="flex items-center justify-start"
              to={work.link}
              target="_blank"
            >
              <span className="w-8 h-8 rounded-full overflow-hidden ml-2">
                <img src={work.logoUrl} alt={work.name} />
              </span>
              <h3 className="pl-2 text-white-100 text-xl font-m">
                {work.name}
              </h3>
            </Link>
          </section>
          <section className="pl-5 py-4 text-base text-white-100 pb-10 mb-4 border-b-2 border-grey-100">
            <p>{work.role}</p>
            <p>{work.location}</p>
            <ul>
              {work.work.map((w, index) => (
                <li key={index} className=" list-disc ml-5 text-white-400">
                  {w}
                </li>
              ))}
            </ul>
          </section>
        </section>
      ))}
    </section>
  );
};

export default WorkComponent;
