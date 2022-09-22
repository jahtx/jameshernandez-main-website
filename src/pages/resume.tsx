import * as React from "react";
import Container from "react-bootstrap/Container";
import TechUsed from "../components/TechUsed";
import resumeFile from "../assets/official-resume.json";
import MainLayout from "../layouts/MainLayout";
import { nanoid } from "nanoid";
import "./resume.scss";

const resumePage = () => {
  const resumeData = resumeFile;
  return (
    <MainLayout>
      <Container className="resumePage pt-9-rem mb-5">
        <div className="mt-4 mb-4">
          <h2>{resumeData.basics.label}</h2>
          {resumeData.basics.summary}
        </div>
        <ul>
          {resumeData.basics.coreStrengths &&
            resumeData.basics.coreStrengths.map((coreStrength) => {
              const id = nanoid();
              return <li key={id}>{coreStrength}</li>;
            })}
        </ul>
        <h2>Experience</h2>
        {resumeData.work &&
          resumeData.work.map((workItem) => {
            const { summary, clients, name, technologies } = workItem;
            const id = nanoid();

            return (
              <div key={id} className="mt-3">
                <h3>{name}</h3>
                <div>
                  {clients ? null : (
                    <>
                      {summary}
                      <br />
                      {technologies && <TechUsed technologies={technologies} />}
                    </>
                  )}
                </div>
                <div>
                  {clients &&
                    clients.map((client) => {
                      const { name, summary, technologies } = client;
                      const id = nanoid();
                      return (
                        <div className="clientSection" key={id}>
                          <h4>Client: {name}</h4>
                          <div>{summary}</div>
                          {technologies && (
                            <TechUsed technologies={technologies} />
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </Container>
    </MainLayout>
  );
};
export default resumePage;
