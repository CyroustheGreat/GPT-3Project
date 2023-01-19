import React from "react";

// import Article from "./components/article/Article";
// import Brand from "./components/brand/Brand";
// import CTA from "./components/cta/CTA";
// import Feature from "./components/feature/Feature";
// import Navbar from "./components/navbar/Navbar";
// to hook teh .css file to the App file
import "./App.css";
import { CTA, Brand, Navbar } from "./components";
import {
  Footer,
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
