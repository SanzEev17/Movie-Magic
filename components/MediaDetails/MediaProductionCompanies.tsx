import { ProductionCompany } from "@/typings";
import React from "react";

const MediaProductionCompanies = ({
  productionCompanies,
}: {
  productionCompanies: ProductionCompany[];
}) => {
  return (
    <div className="md:text-sm">
      <span className="font-medium">Production: </span>
      {productionCompanies.map((company, index) => (
        <span key={company.id}>
          {company.name}
          <span>{index !== productionCompanies.length - 1 && ", "}</span>
        </span>
      ))}
    </div>
  );
};

export default MediaProductionCompanies;
