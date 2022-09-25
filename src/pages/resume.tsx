import * as React from "react";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import type { HeadFC } from "gatsby";
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
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Résumé</Breadcrumb.Item>
        </Breadcrumb>
        <div className="mt-2 mb-4">
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
              const {
                summary,
                clients,
                name,
                position,
                technologies,
                startDateClean,
                endDateClean,
              } = workItem;
              const id = nanoid();

              return (
                <div key={id} className="job mt-3">
                  <h3>{position}</h3>

                  <h4 className="clean">
                    {name} &nbsp;({startDateClean} - {endDateClean})
                  </h4>
                  <div>
                    {clients ? null : (
                      <>
                        <p>{summary}</p>
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
                            <h5>Client: {name}</h5>
                            <p>{summary}</p>
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
        <div className="listSection d-flex">
          <div className="listSection__box">
            <h4>Operating Systems & Applications</h4>
            <ul>
              {resumeData.basics.operatingSystems &&
                resumeData.basics.operatingSystems.map((app) => {
                  const id = nanoid();
                  return <li key={id}>{app}</li>;
                })}
            </ul>
          </div>
          <div className="listSection__box">
            <h4>Languages and Technologies</h4>
            <ul>
              {resumeData.basics.languagesAndTech &&
                resumeData.basics.languagesAndTech.map((tech) => {
                  const id = nanoid();
                  return <li key={id}>{tech}</li>;
                })}
            </ul>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};
export default resumePage;

export const Head: HeadFC = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="cache-control" content="no-cache" />
    <meta
      name="description"
      content="a user experience and web development business in San Antonio, Austin"
    />
    <meta
      name="keywords"
      content="design, user experience, developer, react, redux"
    />
    <meta name="author" content="James Hernandez" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>South Tejas Design</title>
  </>
);
