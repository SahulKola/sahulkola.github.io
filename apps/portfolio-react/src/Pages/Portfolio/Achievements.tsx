import { Recognizations, IPortfolio } from "../../data";
import BaseLayout from "./BaseLayout";
const Achievements = () => {
  return (
    <section>
      <h1 className="heading">Achievements</h1>
      <section className="grid md:grid-cols-2 -mx-4">
        {Recognizations.map((regcog: IPortfolio, index) => (
          <BaseLayout key={regcog.id} index={index} flag="" portfolio={regcog} />
        ))}
      </section>
    </section>
  );
};

export default Achievements;
