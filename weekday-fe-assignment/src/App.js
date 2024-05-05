import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./components/filter/filter";
import store from "./store";
import Content from "./components/content/content";
import { Provider } from "react-redux";

function App() {
  const [filterData, setFilterData] = useState({
    roles: [],
    numberOfEmployees: [],
    experience: null,
    location: [],
    minimumBaseSlary: null,
    searchCompanyText: "",
  });

  return (
    <Provider store={store}>
      <div className="App">
        <Filter filterData={filterData} setFilterData={setFilterData} />
        <Content filterData={filterData} />
      </div>
    </Provider>
  );
}

export default App;
