import React, { useState, useEffect } from "react";
import SearchForm from "./forms/SearchForm";
import JoblyApi from "./Api";
import JobCardList from "./JobCardList";
import LoadingIcon from "./LoadingIcon";

function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function getAllJobsOnMount() {
    search();
  }, []);

  async function search(title) {
    let jobs = await JoblyApi.getJobs(title);
    setJobs(jobs);
  }

  if (!jobs) return <LoadingIcon />;

  return (
    <div className="JobList">
      <SearchForm searchFor={search} />
      {jobs.length ? (
        <JobCardList jobs={jobs} />
      ) : (
        <p className="lead">Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default JobList;
