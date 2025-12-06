import {
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import { SiBehance } from "react-icons/si";
import { Link } from "react-router-dom";
import imgUrl from "../../assets/profile-img.jpg";

import { useEffect } from "react";
import { FaCode, FaPalette } from "react-icons/fa6";

const iconsArray = [
  {
    name: <IoLogoLinkedin />,
    url: "https://www.linkedin.com/in/sahulkola",
    color: "#0A66C2",
  },
  {
    name: <IoLogoGithub />,
    url: "https://www.github.com/sahulkola",
  },
  {
    name: <IoLogoTwitter />,
    url: "https://www.twitter.com/sahulkola",
  },

  {
    name: <IoIosMail />,
    url: "mailto:mail2sahul.js@gmail.com",
  },

  {
    name: <SiBehance size={20} />,
    url: "https://www.behance.net/SaHulKola",
  },
];

const whatIDo = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaCode size={30} className="shrink-0 text-accent" />,
    desc: "I'm a front-end developer with a passion for creating visually appealing and user-friendly websites. I have a solid understanding of HTML,CSS,JavaScript and responsive web design principles. To improve code quality and for productivity during development, I use React, TypeScript, Tailwind, and preprocessors like SASS. I strive to deliver high-quality code and work effectively with cross-functional teams to achieve project goals. Currently, I'm exploring Angular, although the learning curve is long. I think it would be great to learn such a powerful framework like Angular.",
  },
  {
    id: 2,
    title: "UI/UX",
    icon: <FaPalette size={30} className="shrink-0 text-accent" />,
    desc: "In addition to my interest in development, I have a keen interest in user interface design. I believe that possessing design skills will greatly enhance my understanding of the fundamental logic behind User Interfaces and further improve my development process. I have acquired sufficient proficiency to design a website from its initial ideation stage all the way through the process of sketching, creating Sitemaps, Wireframing, Prototyping, and more. All of these tasks are efficiently accomplished using the design tool, Figma.",
  },
];
const Hero = () => {
  useEffect(() => {
    document.title = "Home | Sai Kumar Kola";
  }, []);
  return (
    <>
      <section className="relative flex flex-col md:flex-row justify-center items-center wrapper pt-6 pb-10">
        <div className="max-w-[300px] w-full h-[300px] sm:max-w-[365px]  sm:h-[365px] max-h-[365px] border-[18px] bg-grey-500 box-shadow border-solid border-border rounded-full overflow-hidden">
          <img
            src={imgUrl}
            alt="My Posing as Professional xP"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <section
          data-aos="fade-left"
          data-aos-duration="500"
          className="flex flex-col items-center md:items-start grow-0 shrink-1 basis-1/2 mt-10 md:mt-0 md:pl-12"
        >
          <p className="text-xl text-white-400">Frontend Engineer</p>
          <h2 className="mt-2 text-5xl text-white-100 font-sm">
            Sai Kumar Kola
          </h2>
          <div className="mt-3 flex justify-center sm:justify-start items-center gap-4">
            {iconsArray.map((icon) => (
              <Link key={icon.url} to={icon.url} target="_blank">
                <span
                  className={`text-white-500 text-2xl hover:text-white-100 hover:-translate-y-1 transition-all cursor-pointer`}
                >
                  {icon.name}
                </span>
              </Link>
            ))}
          </div>
          <p className=" mt-5 text-base text-white-400">
            I am a self-taught Web Developer who is passionate about bringing
            client's visions to life. My strongest skill is my creativity. Being
            able to gather client's requirements and translate those into an
            engaging, effective, and unique website with minimal and
            user-friendly UI. <br />
          </p>
          <div className="mt-8 text-center sm:text-left">
            <Link
              to="resume.pdf"
              className="btn border-accent hover:bg-accent hover:text-grey-400 transition-colors mb-3 sm:mb-0"
              target="_blank"
            >
              Download CV
            </Link>
            <Link
              to="/contact"
              className="btn ml-2 sm:ml-4 border-white-300  hover:bg-white-300 hover:text-grey-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </section>
        <section></section>
      </section>
      <section className="wrapper mb-20">
        <h2 className="heading mt-10">What I Do</h2>
        <section className="grid md:grid-cols-2 gap-0 md:gap-8">
          {whatIDo.map((child, index) => (
            <section
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay={index * 300}
              key={child.id}
              className="flex flex-col justify-start items-start basis-1/2 mb-5 md:mb-0"
            >
              <div className="flex">
                {child.icon}
                <h3 className="pl-2 text-2xl font-m text-white-100">
                  {child.title}
                </h3>
              </div>
              <p className="text-base mt-4 text-white-400">{child.desc}</p>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default Hero;
