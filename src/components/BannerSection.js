import {graphql, StaticQuery} from "gatsby";
import BackgroundImage from "gatsby-background-image";
import * as React from "react";

const BannerSection = ({ page }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bc_bkg3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={imageData => {
      return (
        <BackgroundImage
          Tag="section"
          className="banner"
          fluid={imageData.desktop.childImageSharp.fluid}
        >
            <div className="container">
              <div className="banner__body">
                <div className="banner__text">

                  {page.bitcoinWhiteTrader.investLeftHeading &&
                  <h1>{page.bitcoinWhiteTrader.investLeftHeading}</h1>}

                  {page.bitcoinWhiteTrader.investLeftHeadingSub &&
                  <p>{page.bitcoinWhiteTrader.investLeftHeadingSub}</p>}

                  {page.bitcoinWhiteTrader.investLeftHeadingText &&
                  <span>{page.bitcoinWhiteTrader.investLeftHeadingText}</span>}

                  <a href="#" className="show-modal button">Sign Up</a>

                </div>
                <div className="banner__form">
                  <iframe data-src="https://registerhappy.net/box_eb35d32d5cbb20c7c8ae738d2286653a" style={{border:0,width:"100%",height:50}}></iframe>
                </div>
                </div>
              </div>

        </BackgroundImage>
      )
    }}
  />
);

export default BannerSection;
