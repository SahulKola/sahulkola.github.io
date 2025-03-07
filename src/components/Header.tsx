import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="relative flex justify-center md:justify-between items-center mt-4 w-full h-20 wrapper">
      <Link to="/">
        <section className="flex justify-between items-center">
          <img src={Logo} alt="My Logo" className="w-10 h-10 md:w-12 md:h-12" />
          <p className=" text-xl text-white-100 pl-3">
            <span className="font-sm">Sahul</span> Kola
          </p>
        </section>
      </Link>
      <menu className=" hidden md:flex md:justify-between md:items-center md:gap-12  md:text-sm md:text-white-400">
        <li className="hover:text-white-100">
          <Link to="/">About</Link>
        </li>
        <li className="hover:text-white-100">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="hover:text-white-100">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:text-white-100">
          <Link to="/contact">Contact</Link>
        </li>
      </menu>
    </header>
  );
};

export default Header;
