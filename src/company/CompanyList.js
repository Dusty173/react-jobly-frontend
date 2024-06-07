import React, { useState, useEffect } from "react";
import JoblyApi from "../Api";
import CompanyCard from "./CompanyCard";
import SearchForm from "../forms/SearchForm";

// List of companies, routed at /companies

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnLoad() {
    search();
  }, []);

  async function search(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  return (
    <>
      <SearchForm searchItem={search} />
      {companies.length ? (
        <div className="Company-list">
          {companies.map((c) => (
            <CompanyCard
              key={c.handle}
              handle={c.handle}
              name={c.name}
              description={c.description}
              logoUrl={c.logoUrl}
            />
          ))}
        </div>
      ) : (
        <h1>Unable to find results.</h1>
      )}
    </>
  );
}

export default CompanyList;