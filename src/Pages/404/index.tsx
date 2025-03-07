import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import img from "../../assets/404.png";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Page Not Found";
  }, []);
  return (
    <section className="wrapper flex my-10 flex-col gap-5 items-center justify-center">
      <h3 className="text-3xl font-sm text-white-400 max-w-[300px]">
        <span className="text-white-100"> Oops!</span> looks like you're lost in
        Space
      </h3>
      <img
        src={img}
        className="max-w-[200px] w-full mx-auto"
        alt="Astronaut Lost in Space"
      />
      <Link
        to="/"
        className="btn flex max-w-[250px] mx-auto justify-between items-center"
      >
        Go Home <FaHome className="ml-3" />
      </Link>
    </section>
  );
};
export default NotFound;
