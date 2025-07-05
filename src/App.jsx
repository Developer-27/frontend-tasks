import React from "react";
import Nav from "./assets/components/Nav";
import Section from "./assets/components/Section";
import Sec2item from "./assets/components/Sec2item";
import Page3and4 from "./assets/components/Page3and4";
import Page5 from "./assets/components/Page5";

const App = () => {
  return (
    <div className="app p-10 px-15 ">
      <Nav val='Get in Touch' />
      <Section />
      <Sec2item />
      <Page3and4 />
      <Page5 />
    </div>
  );
};

export default App;
