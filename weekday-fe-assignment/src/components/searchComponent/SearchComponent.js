import React from "react";
import "./searchComponent.css";
const SearchComponent = ({ filterData, setFilterData, data }) => {
  const handleSearchTextChange = (e) => {
    switch (data.placeholder) {
      case "Search company name":
        setFilterData({ ...filterData, searchCompanyText: e.target.value });
    }
  };
  return (
    <>
      <input
        placeholder={data?.placeholder}
        value={filterData?.searchCompanyText}
        className="search"
        onChange={handleSearchTextChange}
      />
    </>
  );
};
export default SearchComponent;
