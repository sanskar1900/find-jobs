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
  useEffect(() => {
    console.log(filterData);
  }, [filterData]);
  return (
    <Provider store={store}>
      <div className="App">
        <Filter filterData={filterData} setFilterData={setFilterData} />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
