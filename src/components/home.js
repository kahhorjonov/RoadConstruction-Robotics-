import Header from "./header";
import About from "./about";
import News from "./news";
import Contact from "./contact";
import TableComp from "./table-comp";
import Footer from "./footer";
import { useState } from "react";

function Home() {
  return (
    <>
      <Header />
      <About />
      <News />
      <Contact />
      <TableComp />
      <Footer />
    </>
  );
}

export default Home;
