import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./TechMiniCard.scss";

/**
 *
 * @param {object} props - react props
 * @param {object} tech - string
 */

const TechMiniCard = ({ tech }) => {
  const data = useStaticQuery(
    graphql`
      query {
        angLogo: file(relativePath: { eq: "dev-logos/ang-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 30
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        angjsLogo: file(relativePath: { eq: "dev-logos/angjs-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 34
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        rxjsLogo: file(relativePath: { eq: "dev-logos/rxjs-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 30
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        bootstrapLogo: file(
          relativePath: { eq: "dev-logos/bootstrap-logo.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        reactLogo: file(relativePath: { eq: "dev-logos/react-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        reduxLogo: file(relativePath: { eq: "dev-logos/redux-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        gitlabLogo: file(relativePath: { eq: "dev-logos/gitlab-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 32
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        jqueryLogo: file(relativePath: { eq: "dev-logos/jquery-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        html5Logo: file(relativePath: { eq: "dev-logos/html5-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        css3Logo: file(relativePath: { eq: "dev-logos/css3-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 27
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        sassLogo: file(relativePath: { eq: "dev-logos/sass-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        jsLogo: file(relativePath: { eq: "dev-logos/js-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        wpLogo: file(relativePath: { eq: "dev-logos/wordpress-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        linuxLogo: file(relativePath: { eq: "dev-logos/linux-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 27
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        graphqlLogo: file(relativePath: { eq: "dev-logos/graphql-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 27
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        yuiLogo: file(relativePath: { eq: "dev-logos/yui-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 28
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        typescriptLogo: file(relativePath: { eq: "dev-logos/typescript.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        dockerLogo: file(relativePath: { eq: "dev-logos/docker-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        cesiumLogo: file(relativePath: { eq: "dev-logos/cesium-logo.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 31
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        whammyDude: file(relativePath: { eq: "whammy.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 33
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );
  const angLogo = data.angLogo;
  const angjsLogo = data.angjsLogo;
  const rxjsLogo = data.rxjsLogo;
  const bootstrapLogo = data.bootstrapLogo;
  const reactLogo = data.reactLogo;
  const reduxLogo = data.reduxLogo;
  const gitlabLogo = data.gitlabLogo;
  const jqueryLogo = data.jqueryLogo;
  const html5Logo = data.html5Logo;
  const css3Logo = data.css3Logo;
  const sassLogo = data.sassLogo;
  const wpLogo = data.wpLogo;
  const linuxLogo = data.linuxLogo;
  const jsLogo = data.jsLogo;
  const graphqlLogo = data.graphqlLogo;
  const yuiLogo = data.yuiLogo;
  const typescriptLogo = data.typescriptLogo;
  const dockerLogo = data.dockerLogo;
  const cesiumLogo = data.cesiumLogo;
  const whammyDude = data.whammyDude;

  const renderSwitch = (param) => {
    switch (param) {
      case "Angular":
        return {
          image: angLogo,
          weblink: "https://angular.io/",
          altText: "Angular 2",
        };
      case "AngularJS":
        return {
          image: angjsLogo,
          weblink: "https://angularjs.org/",
          altText: "AngularJS",
        };
      case "RXJS":
        return {
          image: rxjsLogo,
          weblink: "http://reactivex.io/",
          altText: "RXJS",
        };
      case "Bootstrap":
        return {
          image: bootstrapLogo,
          weblink: "https://getbootstrap.com/",
          altText: "Bootstrap",
        };
      case "React":
        return {
          image: reactLogo,
          weblink: "https://reactjs.org",
          altText: "React",
        };
      case "Redux":
        return {
          image: reduxLogo,
          weblink: "https://redux.js.org/",
          altText: "Redux",
        };
      case "Gitlab":
        return {
          image: gitlabLogo,
          weblink: "https://about.gitlab.com/",
          altText: "Gitlab",
        };
      case "JQuery":
        return {
          image: jqueryLogo,
          weblink: "https://jquery.com/",
          altText: "JQuery",
        };
      case "HTML5":
        return {
          image: html5Logo,
          weblink:
            "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
          altText: "HTML5",
        };
      case "CSS3":
        return {
          image: css3Logo,
          weblink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          altText: "CSS3",
        };
      case "SASS":
        return {
          image: sassLogo,
          weblink: "https://sass-lang.com/",
          altText: "SASS",
        };

      case "WordPress":
        return {
          image: wpLogo,
          weblink: "https://wordpress.org",
          altText: "WordPress",
        };
      case "Linux":
        return {
          image: linuxLogo,
          weblink: "https://linuxfoundation.org/",
          altText: "Linux",
        };
      case "GraphQL":
        return {
          image: graphqlLogo,
          weblink: "https://graphql.org/",
          altText: "GraphQL",
        };
      case "JavaScript":
        return {
          image: jsLogo,
          weblink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          altText: "JavaScript",
        };
      case "YUI":
        return {
          image: yuiLogo,
          weblink: "https://clarle.github.io/yui3/",
          altText: "YUI Library",
        };
      case "TypeScript":
        return {
          image: typescriptLogo,
          weblink: "https://www.typescriptlang.org/",
          altText: "TypeScript",
        };
      case "Docker":
        return {
          image: dockerLogo,
          weblink: "https://www.ibm.com/cloud/learn/docker",
          altText: "Docker",
        };
      case "Cesium":
        return {
          image: cesiumLogo,
          weblink: "https://cesium.com/",
          altText: "Cesium",
        };
      default:
        return {
          image: whammyDude,
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

TechMiniCard.propTypes = {
  tech: PropTypes.string,
};
export default TechMiniCard;
