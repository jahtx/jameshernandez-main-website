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
        <div>
          {resumeData.work &&
            resumeData.work.map((workItem) => {
              const { summary, clients, name, position, technologies } =
                workItem;
              const id = nanoid();

              return (
                <div key={id} className="job mt-3">
                  <h3>{position}</h3>
                  <h4>{name}</h4>
                  <div>
                    {clients ? null : (
                      <>
                        {summary}
                        <br />
                        {technologies && (
                          <TechUsed technologies={technologies} />
                        )}
                      </>
                    )}
                  </div>
                  {/* div created to contain all the clients */}
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
        </div>
        <h4>Operating Systems & Applications</h4>
        <ul>
          {resumeData.basics.operatingSystems &&
            resumeData.basics.operatingSystems.map((app) => {
              const id = nanoid();
              return <li key={id}>{app}</li>;
            })}
        </ul>
        <h4>Languages and Technologies</h4>
        <ul>
          {resumeData.basics.languagesAndTech &&
            resumeData.basics.languagesAndTech.map((tech) => {
              const id = nanoid();
              return <li key={id}>{tech}</li>;
            })}
        </ul>
      </Container>
    </MainLayout>
  );
};
export default resumePage;
