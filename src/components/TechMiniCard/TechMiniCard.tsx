import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageQuery } from "./ImageQuery";
import "./TechMiniCard.scss";

const TechMiniCard = ({ tech }) => {
  const data = ImageQuery();

  const renderSwitch = (param: string) => {
    switch (param) {
      case "Angular":
        return {
          image: data.angLogo,
          weblink: "https://angular.io/",
          altText: "Angular 2",
        };
      case "AngularJS":
        return {
          image: data.angjsLogo,
          weblink: "https://angularjs.org/",
          altText: "AngularJS",
        };
      case "RXJS":
        return {
          image: data.rxjsLogo,
          weblink: "http://reactivex.io/",
          altText: "RXJS",
        };
      case "Bootstrap":
        return {
          image: data.bootstrapLogo,
          weblink: "https://getbootstrap.com/",
          altText: "Bootstrap",
        };
      case "React":
        return {
          image: data.reactLogo,
          weblink: "https://reactjs.org",
          altText: "React",
        };
      case "Redux":
        return {
          image: data.reduxLogo,
          weblink: "https://redux.js.org/",
          altText: "Redux",
        };
      case "Gitlab":
        return {
          image: data.gitlabLogo,
          weblink: "https://about.gitlab.com/",
          altText: "Gitlab",
        };
      case "JQuery":
        return {
          image: data.jqueryLogo,
          weblink: "https://jquery.com/",
          altText: "JQuery",
        };
      case "HTML5":
        return {
          image: data.html5Logo,
          weblink:
            "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
          altText: "HTML5",
        };
      case "CSS3":
        return {
          image: data.css3Logo,
          weblink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          altText: "CSS3",
        };
      case "SASS":
        return {
          image: data.sassLogo,
          weblink: "https://sass-lang.com/",
          altText: "SASS",
        };

      case "WordPress":
        return {
          image: data.wpLogo,
          weblink: "https://wordpress.org",
          altText: "WordPress",
        };
      case "Linux":
        return {
          image: data.linuxLogo,
          weblink: "https://linuxfoundation.org/",
          altText: "Linux",
        };
      case "GraphQL":
        return {
          image: data.graphqlLogo,
          weblink: "https://graphql.org/",
          altText: "GraphQL",
        };
      case "JavaScript":
        return {
          image: data.jsLogo,
          weblink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          altText: "JavaScript",
        };
      case "YUI":
        return {
          image: data.yuiLogo,
          weblink: "https://clarle.github.io/yui3/",
          altText: "YUI Library",
        };
      case "TypeScript":
        return {
          image: data.typescriptLogo,
          weblink: "https://www.typescriptlang.org/",
          altText: "TypeScript",
        };
      case "Docker":
        return {
          image: data.dockerLogo,
          weblink: "https://www.ibm.com/cloud/learn/docker",
          altText: "Docker",
        };
      case "Cesium":
        return {
          image: data.cesiumLogo,
          weblink: "https://cesium.com/",
          altText: "Cesium",
        };
      default:
        return {
          image: data.whammyDude,
          weblink: "https://en.wikipedia.org/wiki/Whammy",
          altText: "whammy",
        };
    }
  };

  return (
    <>
      <div className="techCard d-flex flex-column justify-content-end">
        <a
          href={renderSwitch(tech).weblink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="d-flex justify-content-center">
            <div className="techCard__icon d-flex justify-content-center">
              <GatsbyImage
                image={getImage(renderSwitch(tech).image)}
                alt={renderSwitch(tech).altText}
              />
            </div>
          </div>
          <div className="pt-6-rem font-weight-bold d-flex justify-content-center">
            {tech}
          </div>
        </a>
      </div>
    </>
  );
};

export default TechMiniCard;
