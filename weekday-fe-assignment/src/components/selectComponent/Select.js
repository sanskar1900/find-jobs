import React, { useState } from "react";
import "./select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
const Select = ({ filterData, setFilterData, data }) => {
  const [showOptions, setShowOptions] = useState(false);
  const removeSelectedItem = (type, selectedValue) => {
    switch (type) {
      case "Roles":
        const alteredRoles = filterData?.roles?.filter(
          (item) => item !== selectedValue
        );
        setFilterData({ ...filterData, roles: alteredRoles });
    }
  };
  const renederDropDown = (data) => {
    switch (data.placeholder) {
      case "Roles":
        return (
          <div className="selectcomponent select">
            <div className="selectcomponent displaySelectedData">
              {filterData?.roles?.map((selectedValue) => {
                return (
                  <div className="selectcomponent flex">
                    <div> {selectedValue} </div>
                    <div
                      onClick={() => removeSelectedItem("Roles", selectedValue)}
                    >
                      {" "}
                      <CloseIcon className="selectcomponent cross" />{" "}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="selectcomponent divider"></div>
            <div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
        );
    }
  };
  return <>{renederDropDown(data)}</>;
};
export default Select;
