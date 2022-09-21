import * as React from "react";
import Container from "react-bootstrap/Container";
import resumeFile from "../assets/official-resume.json";
import { nanoid } from "nanoid";
import MainLayout from "../layouts/MainLayout";

const resumePage = () => {
  const resumeData = resumeFile;
  return (
    <MainLayout>
      <Container className="pt-9-rem">
        <div className="mb-4">{resumeData.basics.summary}</div>
        <ul>
          {resumeData.basics.coreStrengths &&
            resumeData.basics.coreStrengths.map((coreStrength) => {
              return <li>{coreStrength}</li>;
            })}
        </ul>
      </Container>
    </MainLayout>
  );
};
export default resumePage;
