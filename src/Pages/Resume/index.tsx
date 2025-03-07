import EducationComponent from "./EducationComponent";
import SectionHeader from "../../components/SectionHeader";
import Certificate from "./Certificate";
import WorkComponent from "./WorkComponent";
import Skills from "./Skills";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    document.title = "Resume | Sai Kumar Kola";
  }, []);
  return (
    <>
      <SectionHeader title="Resume" caption="My Resume" />
      <section className="wrapper">
        <section className="grid md:grid-cols-2 gap-0 md:gap-5 ">
          <EducationComponent />
          <WorkComponent />
        </section>
        <Certificate />
        <Skills />
      </section>
    </>
  );
};

export default Resume;
