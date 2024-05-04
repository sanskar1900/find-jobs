import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Filter from "./components/filter/filter";
import Content from "./components/content/content";

function App() {
  const [filterData, setFilterData] = useState({
    roles: ["Frontend", "Backend"],
    numberOfEmployees: null,
    experience: null,
    location: ["Remote"],
    minimumBaseSlary: null,
    searchCompanyText: "",
  });
  return (
    <div className="App">
      <Filter filterData={filterData} setFilterData={setFilterData} />
      <Content />
    </div>
  );
}

export default App;
