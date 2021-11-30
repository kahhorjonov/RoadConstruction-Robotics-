import Header from "./header";
import About from "./about";
import News from "./news";
import Contact from "./contact";
import TableComp from "./table-comp";
import Footer from "./footer";
import { useState } from "react";
import { CountRegionsRoad } from "./countRegionsRoad";

function Home() {
  const [data, setData] = useState([]);
  CountRegionsRoad({ datas: data });
  return (
    <>
      <Header data={data} />
      <About />
      <News />
      <Contact />
      <TableComp readData={(data) => setData(data)} />
      <Footer />
    </>
  );
}

export default Home;
