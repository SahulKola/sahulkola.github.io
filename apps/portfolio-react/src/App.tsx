import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterNav from "./components/FooterNav";
import Hero from "./Pages/Home";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import NotFound from "./Pages/404";
import Contact from "./Pages/Contact";
import { useEffect, useState } from "react";
function App() {
  const [Width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(() => window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(() => window.innerWidth);
      });
    };
  }, [Width]);
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {Width < 799 ? <FooterNav /> : ""}
      </main>
      <Footer />
    </>
  );
}

export default App;
