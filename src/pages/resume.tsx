import * as React from "react";
import Container from "react-bootstrap/Container";
import resumeFile from "../assets/official-resume.json";
import MainLayout from "../layouts/MainLayout";
import "./resume.scss";

const resumePage = () => {
  const resumeData = resumeFile;
  return (
    <MainLayout>
      <Container className="resumePage pt-9-rem">
        <div className="mt-4 mb-4">
          <h2>{resumeData.basics.label}</h2>
          {resumeData.basics.summary}
        </div>
        <ul>
          {resumeData.basics.coreStrengths &&
            resumeData.basics.coreStrengths.map((coreStrength) => {
              return <li>{coreStrength}</li>;
            })}
        </ul>
        <h2>Experience</h2>
        {resumeData.work &&
          resumeData.work.map((workItem) => {
            return (
              <div className="mt-3">
                <h3>{workItem.name}</h3>
                <div> {workItem.summary}</div>
              </div>
            );
          })}
      </Container>
    </MainLayout>
  );
};
export default resumePage;
