import SectionHeader from "../../components/SectionHeader";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import Art from "../../assets/Art.svg";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Sai Kumar Kola";
  }, []);

  return (
    <>
      <SectionHeader title="Contact" caption="Get In Touch" />
      <section className=" grid md:grid-cols-2 items-center wrapper mt-5 sm:mt-10">
        <section
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-delay="300"
          className="justify-self-center max-w-[300px] sm:max-w-[350px] w-full h-auto"
        >
          <img src={Art} />
        </section>
        <div className="justify-self-center sm:justify-self-auto text-white-200 mb-10"
        >
          <section data-aos="fade-down"
          data-aos-duration="250"
          data-aos-delay="700" className="flex justify-start items-center mb-5 md:mb-10">
            <span className="pr-2 md:pr-4">
              <FaLocationDot size={40} className="hover:text-accent" />
            </span>
            <div>
              <h3 className=" text-base md:text-3xl font-m">Hyderabad</h3>
            </div>
          </section>
          <section data-aos="fade-down"
          data-aos-duration="250"
          data-aos-delay="900" className="flex justify-start items-start">
            <span className="pr-2 md:pr-4 ">
              <FaEnvelope size={40} className="hover:text-accent" />
            </span>
            <div>
              <p className="text-base text-white-400">Mail me at</p>
              <h3 className=" text-base md:text-3xl font-m">
                mail2sahul.js@gmail.com
              </h3>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
