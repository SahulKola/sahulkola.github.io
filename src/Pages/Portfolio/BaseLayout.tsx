import { IPortfolio } from "../../data";

const BaseLayout = ({
  portfolio,
  flag,
  index,
}: {
  portfolio: IPortfolio;
  flag: string;
  index: number;
}) => {
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="400"
      data-aos-delay={index * 50}
      className="flex flex-col items-stretch justify-start text-white-100 mb-10 mx-4"
    >
      <div className="relative min-h-[200px] h-[200px] lg:min-h-[320px] rounded-2xl overflow-hidden cursor-pointer shadow-xl shadow-grey-500">
        <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
          <img
            src={portfolio.thumbnail}
            alt={portfolio.name}
            className="hover:scale-105 transition-all object-cover w-full h-full"
          />
        </a>
      </div>
      <section className="flex flex-col items-start justify-between h-auto sm:h-full">
        <div>
          <h2 className="text-xl self-start mt-5 font-m">{portfolio.name}</h2>
          <p className="text-sm text-white-400 mt-2">{portfolio.description}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-m text-base">
            {flag === "portfolio" ? "TechStack" : portfolio.prop}
          </h3>
          <div className="-mx-2 flex flex-wrap">
            {portfolio.techstack.map((m: string, index) => (
              <span key={index} className="techstack mt-2">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default BaseLayout;
