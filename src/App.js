import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Categories from "./Components/Categories";

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories/>
    </div>
  );
};

export default App;
