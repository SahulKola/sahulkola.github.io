import { useEffect, useRef } from "react";
import { FaFileAlt, FaHome, FaSuitcase } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { Link } from "react-router-dom";
const FooterNav = () => {
  const stickyNav = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let scrollPos = window.scrollY;

    const handleScroll = () => {
      let currentScroll = window.scrollY;
      const footerElem = stickyNav.current;
      if (!footerElem) {
        return;
      }
      if (currentScroll < scrollPos) {
        footerElem.style.transform = "translate(-50%,-50%)";
      } else {
        footerElem.style.transform = "translate(-50%,100%)";
      }
      scrollPos = currentScroll;
    };
    if (window.innerWidth < 799) {
      stickyNav.current?.classList.remove("hidden");
      stickyNav.current?.classList.add("flex");
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      ref={stickyNav}
      className="hidden fixed left-1/2 bottom-0 translate-y-full -translate-x-1/2 justify-between items-center max-w-[300px] w-full px-10 bg-white-100 bg-opacity-60 rounded-2xl h-14 z-10 transition-all"
    >
      <Link to="/">
        <FaHome
          className="text-grey-500 cursor-pointer hover:-translate-y-1 transition-transform"
          size={30}
        />
      </Link>
      <Link to="/resume">
        <FaFileAlt
          size={30}
          className="text-grey-500 cursor-pointer hover:-translate-y-1 transition-transform"
        />
      </Link>
      <Link to="/portfolio">
        <FaSuitcase
          size={30}
          className="text-grey-500 cursor-pointer hover:-translate-y-1 transition-transform"
        />
      </Link>
      <Link to="/contact">
        <MdContactMail
          size={30}
          className="text-grey-500 cursor-pointer hover:-translate-y-1 transition-transform"
        />
      </Link>
    </section>
  );
};

export default FooterNav;
