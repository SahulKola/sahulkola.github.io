import { BsMeta } from "react-icons/bs";
import { FaAtlassian, FaFreeCodeCamp, FaHackerrank } from "react-icons/fa";
import { Link } from "react-router-dom";
const Certificates = [
  {
    name: "Meta Front-End Developer Professional Certificate",
    logo: <BsMeta size={50} />,
    provider: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/Z6DU8NMEWU4J",
    cred: "Z6DU8NMEWU4J",
    issue: "July 2023",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    logo: <FaFreeCodeCamp size={50} />,
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/sahulkola/javascript-algorithms-and-data-structures",
    cred: "xxxxxxxxxxx",
    issue: "July 2023",
  },
  {
    name: "Agile with Atlassian Jira",
    logo: <FaAtlassian size={50} />,
    provider: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/WYY62FS9PC5B",
    cred: "WYY62FS9PC5B",
    issue: "July 2023",
  },
  {
    name: "Responsive Web Design",
    logo: <FaFreeCodeCamp size={50} />,
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/sahulkola/responsive-web-design",
    cred: "xxxxxxxxxx",
    issue: "June 2021",
  },
  {
    name: "Version Control with Git",
    logo: <FaAtlassian size={50} />,
    provider: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/certificate/M342UW6S3D2X",
    cred: "M342UW6S3D2X",
    issue: "May 2021",
  },
  {
    name: "CSS",
    logo: <FaHackerrank size={50} />,
    provider: "HackerRank",
    link: "https://www.hackerrank.com/certificates/09c40cc1779f",
    cred: "09c40cc1779f",
    issue: "May 2021",
  },
];
const Certificate = () => {
  return (
    <section className="mb-10">
      <h2 className="heading">Licenses & Certificates</h2>
      <section>
        <section className="grid md:grid-cols-2 gap-5">
          {Certificates.map((certi, index) => (
            <Link
              to={certi.link}
              className="block"
              target="_blank"
              key={certi.name}
            >
              <section
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay={index * 100}
                className="flex justify-start items-center h-full border-solid border-2 border-grey-100 rounded-lg text-white-500 overflow-hidden cursor-pointer hover:-translate-y-2 hover:transition-transform"
              >
                <div className=" flex items-center justify-center basis-1/3 shrink-0 bg-grey-100 min-h-[140px] self-stretch">
                  {certi.logo}
                </div>
                <div className="px-4 py-2">
                  <h3 className="font-m text-lg md:text-xl text-white-100">
                    {certi.name}
                  </h3>
                  <p className="text-md text-white-200 font-m">
                    {certi.provider}
                  </p>
                  <p className="text-sm">Credential ID: {certi.cred}</p>
                  <p className="text-sm">{certi.issue}</p>
                </div>
              </section>
            </Link>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Certificate;
