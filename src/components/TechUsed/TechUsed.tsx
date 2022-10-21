import React from "react";
import TechMiniCard from "../TechMiniCard/TechMiniCard";
import { nanoid } from "nanoid";

const TechUsed = ({ technologies }) => {
  return (
    <React.Fragment>
      <span className="pt-8-rem font-weight-bold">Technologies Used:</span>
      <div className="d-flex flex-row flex-wrap">
        {technologies &&
          technologies.map((tech: string[]) => {
            const id = nanoid();
            return (
              <div className="miniCardSection" key={id}>
                <TechMiniCard tech={tech} />
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
};

export default TechUsed;
