const query = `
  query {
    allWpPage {
      edges {
        node {
          template {
            ... on WpTemplate_SwitcherBitcoinWhiteTrader {
              templateName
              bitcoinWhiteTrader {
                investInBitcoinTopLogo {
                  altText
                  sourceUrl
                }
                investInBitcoinSignUp
                bottomText
                currenciesButton
                currenciesButtonUrl
                currenciesHeading
                currenciesRepeter {
                  currenciesImages {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 150
                          quality: 90
                          placeholder: TRACED_SVG
                        )
                      }
                    }
                  }
                }
                customersInvestHeading
                discoverHeading
                fieldGroupName
                headerBgColor
                iframeCode2
                iframeCode3
                iframeCodeLabel
                iframeCodeRadio
                investInBitcoinSignUp
                investInBitcoinSignUpUrl
                investLeftHeading
                investLeftHeadingSub
                investLeftHeadingText
                investRightFormIframeSrc
                source
                customersInvestRepeter {
                  investText
                  investImage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          width: 62
                          quality: 90
                          placeholder: TRACED_SVG
                        )
                      }
                    }
                  }
                }
              }
              signUpBitcoinWhiteTraderPage {
                featuresSectionBgImage {
                  sourceUrl
                }
                featuresBox {
                  featureBoxImage {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          height: 105
                          quality: 90
                          placeholder: TRACED_SVG
                        )
                      }
                    }
                  }
                  featureBoxContent
                  featureBoxName
                  fieldGroupName
                }
                faqHeadTitle
                featuresBoxButtonUrl
                featuresBoxButton
                featuresHeadTitle
                bannerForm
                bannerVideo
                bannerVideoFormContent
                bannerVideoFormTitle
                bitcoinSeenOnText
                faqBottomContentLeft
                faqBottomContentRight
                faqBottomContentTitle
                fieldGroupName
                getStartedNowButton
                getStartedNowButtonUrl
                howWorkButton
                howWorkButtonUrl
                liveProfitResult
                realTestimonialsHeadTitle
                joinBitcoinLifestyleTitle
                joinBitcoinLifestyleContent
                howWorkStepTwoTitle
                howWorkStepTwoContent
                howWorkStepThreeTitle
                howWorkStepThreeContent
                howWorkStepOneTitle
                howWorkStepOneContent
                howWorkHeadTitle
                faqBox {
                  faqContent
                  faqName
                  faqNumber
                }
              }
            }
          }
        }
      }
    }
  }
  `;

const trans = {
  bitcoinWhiteTrader: {
    bottomText: true,
    currenciesButton: true,
    currenciesHeading: true,
    customersInvestHeading: true,
    discoverHeading: true,
    headerBgColor: true,
    iframeCodeLabel: true,
    investInBitcoinSignUp: true,
    investLeftHeading: true,
    investLeftHeadingSub: true,
    investLeftHeadingText: true,
    customersInvestRepeter: {
      investText: true
    }
  },
  signUpBitcoinWhiteTraderPage: {
    featuresBox: {
      featureBoxContent: true,
      featureBoxName: true,
    },
    faqHeadTitle: true,
    featuresBoxButton: true,
    featuresHeadTitle: true,
    bitcoinSeenOnText: true,
    faqBottomContentTitle: true,
    faqBox: {
      faqName: true,
      faqContent: true,
    }
  }
};

module.exports = {
  query,
  trans
}
