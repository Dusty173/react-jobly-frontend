import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../Api";
import JobCardList from "../JobCardList";
import LoadingIcon from "../LoadingIcon";

// Company info, Routed at /companies/:handle

function CompanyInfo() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function getCompanyandJobs() {
      async function getCompany() {
        let company = await JoblyApi.getCompany(handle);
        setCompany(company);
      }
      getCompany();
    },
    [handle]
  );

  if (!company) return <LoadingIcon />;


  return (
    <div className="Company-Info">
        <h3>{company.name}</h3>
        <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
    </div>
  )
}

export default CompanyInfo;
