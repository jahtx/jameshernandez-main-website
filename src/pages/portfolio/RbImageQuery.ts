import { useStaticQuery, graphql } from "gatsby";

export const RbImageQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        mainMobile: file(relativePath: { eq: "composites/RBFCU_Main-1.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 270
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        mainDesktop: file(relativePath: { eq: "composites/RBFCU_Main-2.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 760
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        mortgageMobile: file(
          relativePath: { eq: "composites/RBFCU_Mortgage-1.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 270
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }

        mortgageDesktop: file(
          relativePath: { eq: "composites/RBFCU_Mortgage-2.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 760
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        autoLoansMobile: file(
          relativePath: { eq: "composites/RBFCU_Auto_Loans-1.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 270
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        autoLoansDesktop: file(
          relativePath: { eq: "composites/RBFCU_Auto_Loans-2.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 760
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        checkingMobile: file(
          relativePath: { eq: "composites/RBFCU_Checking-1.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 270
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
        checkingDesktop: file(
          relativePath: { eq: "composites/RBFCU_Checking-2.png" }
        ) {
          childImageSharp {
            gatsbyImageData(
              quality: 85
              width: 760
              placeholder: BLURRED
              formats: [WEBP]
              layout: CONSTRAINED
            )
          }
        }
      }
    `
  );
  return data;
};
