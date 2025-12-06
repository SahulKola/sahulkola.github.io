import { HiReceiptPercent } from "react-icons/hi2";
import { Education, IEdu } from "../../data";

const EducationComponent = () => {
  return (
    <section className=" basis-1/2">
      <h2 className="heading">Education</h2>
      {Education.map((degree: IEdu, index) => (
        <section
          key={degree.id}
          data-aos="fade-down"
          data-aos-duration="300"
          data-aos-delay={index * 100}
          className="text-white-100 border-solid border-l-2 border-grey-100 ml-4 pt-3 pb-3 first-of-type:pt-0 last-of-type:mb-3"
        >
          <section className="flex justify-start items-center">
            <p className="year -ml-4 text-center">{degree.year}</p>
            <h3 className="pl-2 text-white-100 text-base md:text-xl font-m">
              {degree.name}
            </h3>
          </section>
          <section className="pl-5 py-4 text-base text-white-100 border-b-2 border-grey-100 ">
            <p>{degree.degree}</p>
            <p>{degree.course}</p>
            <p className="text-white-400">{degree.board}</p>
            <p className="text-white-400">{degree.location}</p>
            <section className="flex justify-start items-center">
              <HiReceiptPercent fontSize={20} />
              <p className="pl-2">
                {degree.degree === "Intermediate" ? "Percentage" : "CGPA"} :{" "}
                {degree.percentage}
              </p>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default EducationComponent;
