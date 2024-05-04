import React from "react";
import "./filter.css";
import { filterItems } from "../../constants/filterItem";
import SearchComponent from "../searchComponent/SearchComponent";
import Select from "../selectComponent/Select";
const Filter = ({ filterData, setFilterData }) => {
  return (
    <>
      <div className="filter root">
        {filterItems?.map((data) => {
          if (data?.type === "select") {
            return (
              <Select
                filterData={filterData}
                setFilterData={setFilterData}
                data={data}
              />
            );
          } else {
            return (
              <SearchComponent
                filterData={filterData}
                setFilterData={setFilterData}
                data={data}
              />
            );
          }
        })}
      </div>
    </>
  );
};
export default Filter;
