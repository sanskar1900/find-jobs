import React, { useEffect, useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getJobData from "../../action";
import Box from "@mui/material/Box";
import "./content.css";
import Grid from "@mui/material/Grid";
import JobCard from "../jobCard/JobCard";
const Content = ({ filterData }) => {
  const bottomReference = useRef(null);
  const prevFilterData = useRef(filterData);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { jobData, isLoading } = useSelector((state) => state.getJobReducer);
  const [jobsToRender, setJobsToRender] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const totalPages =
    jobData?.totalCount % 15 === 0
      ? jobData?.totalCount / 15
      : Math.ceil(jobData?.totalCount / 15);
  useEffect(() => {
    if (currentPage < totalPages) {
      window.addEventListener("scroll", handleScroll);
    }
    dispatch(
      getJobData({
        limit: 15,
        offset: (currentPage - 1) * 15,
      })
    );
  }, []);
  useEffect(() => {
    const currentJobs = jobsToRender;
    const currentAllJobs = allJobs;
    setJobsToRender([...currentJobs, ...(jobData?.jdList || [])]);
    setAllJobs([...currentAllJobs, ...(jobData?.jdList || [])]);
  }, [jobData]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    let filteredRole = [];
    if (filterData?.roles?.length > 0) {
      filteredRole = allJobs.filter((job) => {
        const jobRole =
          job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1);
        return filterData?.roles?.includes(jobRole);
      });
    } else {
      filteredRole = allJobs;
    }
    let experienceFilter = [];
    if (filterData?.experience) {
      experienceFilter = filteredRole?.filter((job) => {
        return job.minExp === filterData?.experience;
      });
    } else {
      experienceFilter = filteredRole;
    }
    let locationFilter = [];
    if (filterData?.location?.length > 0) {
      locationFilter = experienceFilter.filter((job) => {
        const jobLoation =
          job.location.charAt(0).toUpperCase() + job.location.slice(1);
        return (
          filterData?.location?.includes(jobLoation) ||
          (filterData?.location?.includes("In-office") &&
            jobLoation !== "Remote")
        );
      });
    } else {
      locationFilter = experienceFilter;
    }
    let salaryFilter = [];
    if (filterData?.minimumBaseSlary) {
      salaryFilter = locationFilter?.filter((job) => {
        const numericPart = parseInt(filterData?.minimumBaseSlary);
        return numericPart <= job?.minJdSalary;
      });
    } else {
      salaryFilter = locationFilter;
    }
    let searchFilter = [];
    if (filterData?.searchCompanyText?.length > 0) {
      searchFilter = salaryFilter?.filter((job) => {
        return job?.companyName
          ?.toLowerCase()
          .includes(filterData?.searchCompanyText);
      });
    } else {
      searchFilter = salaryFilter;
    }
    setJobsToRender([...searchFilter]);
  }, [filterData]);
  useEffect(() => {
    console.log("filtered job changed", filteredJobs);
    setJobsToRender(filteredJobs);
    console.log(jobsToRender);
  }, [filteredJobs]);
  const handleScroll = () => {
    if (
      bottomReference.current &&
      bottomReference.current.getBoundingClientRect().bottom <=
        window.innerHeight
    ) {
      window.removeEventListener("scroll", handleScroll);
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "100px",
        }}
      >
        {jobsToRender?.length > 0 ? (
          <Grid container spacing={6}>
            {jobsToRender?.map((data, index) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
                  <JobCard data={data} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <>
            <div className="content center">
              <img
                src="https://jobs.weekday.works/_next/static/media/nothing-found.4d8f334c.png"
                height={200}
                width={200}
              ></img>
            </div>
            <div className="content center">
              <div className="content nojob">
                No Jobs available for this category at the moment
              </div>
            </div>
          </>
        )}
      </Box>
      {isLoading && currentPage < totalPages && <div>Loading More...</div>}
      <div ref={bottomReference}></div>
    </>
  );
};
export default Content;
