import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

function CompanyCard({ name, description, logoUrl, handle }) {

  return (
    <Link className="CompanyCard" to={`/companies/${handle}`}>
      <div>
        <h6 className="card-title">
          {name}
          {logoUrl && (
            <img src={logoUrl} alt={name} />
          )}
        </h6>
        <p>
          <small>{description}</small>
        </p>
      </div>
    </Link>
  );
}

export default CompanyCard;
