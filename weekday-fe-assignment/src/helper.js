export const filterJobsData = (filterData, allJobs, jobData) => {
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
        (filterData?.location?.includes("In-office") && jobLoation !== "Remote")
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

  return searchFilter?.length > 0 ? searchFilter : jobData?.jdList;
};
