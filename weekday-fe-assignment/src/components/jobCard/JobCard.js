import React from "react";
import "./cardStyle.css";
const JobCard = ({ data }) => {
  return (
    <div className="card root">
      <>
        <div className="card flex">
          <div>
            <img
              src={data?.logoUrl}
              alt="company-logo"
              height={35}
              width={35}
              className="card logo"
            />
          </div>
          <div>
            <div className="card companyName">{data?.companyName}</div>
            <div className="card role">
              {data?.jobRole
                ? data.jobRole.charAt(0).toUpperCase() + data.jobRole.slice(1)
                : ""}
            </div>
            <div className="card location">
              {" "}
              {data?.location
                ? data.location.charAt(0).toUpperCase() + data.location.slice(1)
                : ""}
            </div>
          </div>
        </div>
        <div className="card salaryInfo">
          {`Estimated Salary: $${
            data?.minJdSalary ? `${data?.minJdSalary}-` : ``
          }${data?.maxJdSalary} LPA ✅`}
        </div>
        <div className="card aboutCompany">About Company:</div>
        <div className="card aboutUs">About us</div>
        <p className="card jobDetails">{data?.jobDetailsFromCompany}</p>
        <div className="card center">
          <div
            className="card view"
            onClick={() => {
              window.open(data?.jdLink, "__blank");
            }}
          >
            View Job
          </div>
        </div>
        {data?.minExp && (
          <>
            <div className="card exp">Minimum Experience</div>
            <div className="card minexp">{data?.minExp} years</div>
          </>
        )}
      </>
      <button className="card apply">{"⚡️ Easy apply"}</button>
    </div>
  );
};
export default JobCard;
