import React, { useState, useRef, useEffect } from "react";
import "./select.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
const Select = ({ filterData, setFilterData, data }) => {
  const [showOptions, setShowOptions] = useState(false);
  const divRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const removeSelectedItem = (event, type, selectedValue) => {
    event.stopPropagation();
    switch (type) {
      case "Roles":
        const alteredRoles = filterData?.roles?.filter(
          (item) => item !== selectedValue
        );
        setFilterData({ ...filterData, roles: alteredRoles });
        break;
      case "Number of Employees":
        const alteredNumberOfEmployees = filterData?.numberOfEmployees?.filter(
          (item) => item !== selectedValue
        );
        setFilterData({
          ...filterData,
          numberOfEmployees: alteredNumberOfEmployees,
        });
        break;
      case "Experience":
        setFilterData({
          ...filterData,
          experience: null,
        });
        break;
      case "Remote":
        const alteredLocation = filterData?.location?.filter(
          (item) => item !== selectedValue
        );
        setFilterData({
          ...filterData,
          location: alteredLocation,
        });
        break;
      case "Minimum base pay salary":
        setFilterData({ ...filterData, minimumBaseSlary: null });
      default:
        break;
    }
  };
  const selectOption = (type, itemToSelect) => {
    switch (type) {
      case "Roles":
        const alteredRoles = [...filterData?.roles, itemToSelect];
        setFilterData({ ...filterData, roles: alteredRoles });
        break;
      case "Number of Employees":
        const alteredNumberOfEmployees = [
          ...filterData?.numberOfEmployees,
          itemToSelect,
        ];
        setFilterData({
          ...filterData,
          numberOfEmployees: alteredNumberOfEmployees,
        });
        break;
      case "Experience":
        setFilterData({ ...filterData, experience: itemToSelect });
        break;
      case "Remote":
        const alteredLocation = [...filterData?.location, itemToSelect];
        setFilterData({
          ...filterData,
          location: alteredLocation,
        });
        break;
      case "Minimum base pay salary":
        setFilterData({
          ...filterData,
          minimumBaseSlary: itemToSelect,
        });
        break;
      default:
        break;
    }
  };
  const renederDropDown = () => {
    switch (data.placeholder) {
      case "Roles":
        return (
          <div ref={divRef} className="selectcomponent root">
            <div
              className="selectcomponent select"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
            >
              {filterData?.roles?.length === 0 && data?.placeholder}
              <div className="selectcomponent displaySelectedData">
                {filterData?.roles?.map((selectedValue) => {
                  return (
                    <div className="selectcomponent flex">
                      <div> {selectedValue} </div>
                      <div
                        onClick={(event) =>
                          removeSelectedItem(event, "Roles", selectedValue)
                        }
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
            {showOptions && (
              <div className="selectcomponent options">
                {data?.options?.map((data) => {
                  return (
                    <>
                      <div className="selectcomponent groupName">
                        {data?.group}
                      </div>
                      {data?.items?.map((item) => {
                        return filterData?.roles?.includes(item) ? (
                          <></>
                        ) : (
                          <option
                            value={item}
                            className="selectcomponent optionItem"
                            onClick={() => {
                              selectOption("Roles", item);
                            }}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        );
        break;
      case "Number of Employees":
        return (
          <div ref={divRef} className="selectcomponent root">
            <div
              className="selectcomponent select"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
            >
              {filterData?.numberOfEmployees?.length === 0 && data?.placeholder}
              <div className="selectcomponent displaySelectedData">
                {filterData?.numberOfEmployees?.map((selectedValue) => {
                  return (
                    <div className="selectcomponent flex">
                      <div> {selectedValue} </div>
                      <div
                        onClick={(event) =>
                          removeSelectedItem(
                            event,
                            "Number of Employees",
                            selectedValue
                          )
                        }
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
            {showOptions && (
              <div className="selectcomponent options">
                {data?.options?.map((data) => {
                  return (
                    <>
                      {data?.items?.map((item) => {
                        return filterData?.numberOfEmployees?.includes(item) ? (
                          <></>
                        ) : (
                          <option
                            value={item}
                            className="selectcomponent optionItem"
                            onClick={() => {
                              selectOption("Number of Employees", item);
                            }}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        );
        break;
      case "Experience":
        return (
          <div ref={divRef} className="selectcomponent root">
            <div
              className="selectcomponent select"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
            >
              {!filterData?.experience && data?.placeholder}
              <div className="selectcomponent displaySelectedData">
                <div className="selectcomponent flex">
                  {filterData?.experience && (
                    <>
                      <div> {filterData?.experience} </div>
                      <div
                        onClick={(event) =>
                          removeSelectedItem(
                            event,
                            "Experience",
                            filterData?.experience
                          )
                        }
                      >
                        {" "}
                        <CloseIcon className="selectcomponent cross" />{" "}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="selectcomponent divider"></div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            {showOptions && (
              <div className="selectcomponent options">
                {data?.options?.map((data) => {
                  return (
                    <>
                      {data?.items?.map((item) => {
                        return filterData?.experience === item ? (
                          <></>
                        ) : (
                          <option
                            value={item}
                            className="selectcomponent optionItem"
                            onClick={() => {
                              selectOption("Experience", item);
                            }}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        );
        break;
      case "Remote":
        return (
          <div ref={divRef} className="selectcomponent root">
            <div
              className="selectcomponent select"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
            >
              {filterData?.location?.length === 0 && data?.placeholder}
              <div className="selectcomponent displaySelectedData">
                {filterData?.location?.map((selectedValue) => {
                  return (
                    <div className="selectcomponent flex">
                      <div> {selectedValue} </div>
                      <div
                        onClick={(event) =>
                          removeSelectedItem(event, "Remote", selectedValue)
                        }
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
            {showOptions && (
              <div className="selectcomponent options">
                {data?.options?.map((data) => {
                  return (
                    <>
                      {data?.items?.map((item) => {
                        return filterData?.location?.includes(item) ? (
                          <></>
                        ) : (
                          <option
                            value={item}
                            className="selectcomponent optionItem"
                            onClick={() => {
                              selectOption("Remote", item);
                            }}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        );
        break;
      case "Minimum base pay salary":
        return (
          <div ref={divRef} className="selectcomponent root">
            <div
              className="selectcomponent select"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
            >
              {!filterData?.minimumBaseSlary && data?.placeholder}
              <div className="selectcomponent displaySelectedData">
                {filterData?.minimumBaseSlary && (
                  <>
                    <div className="selectcomponent flex">
                      <div> {filterData?.minimumBaseSlary} </div>
                      <div
                        onClick={(event) =>
                          removeSelectedItem(
                            event,
                            "Minimum base pay salary",
                            filterData?.minimumBaseSlary
                          )
                        }
                      >
                        {" "}
                        <CloseIcon className="selectcomponent cross" />{" "}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="selectcomponent divider"></div>
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
            {showOptions && (
              <div className="selectcomponent options">
                {data?.options?.map((data) => {
                  return (
                    <>
                      {data?.items?.map((item) => {
                        return filterData?.minimumBaseSlary === item ? (
                          <></>
                        ) : (
                          <option
                            value={item}
                            className="selectcomponent optionItem"
                            onClick={() => {
                              selectOption("Minimum base pay salary", item);
                            }}
                          >
                            {item}
                          </option>
                        );
                      })}
                    </>
                  );
                })}
              </div>
            )}
          </div>
        );
        break;
    }
  };
  return <>{renederDropDown()}</>;
};
export default Select;
