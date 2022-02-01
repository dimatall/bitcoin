import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import BannerSection from "../components/BannerSection";
import Header from "../components/Header";

const IndexPage = ({ pageContext: { page, lang } }) => {

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }]
  };

  const featureList = page.signUpBitcoinWhiteTraderPage.featuresBox.map(function(item, index) {
    return  <div className="feature__item" key={index}>
              {item.featureBoxImage &&
              <GatsbyImage
                className="feature__item-image"
                image={item.featureBoxImage?.localFile?.childImageSharp?.gatsbyImageData}
                alt={item.featureBoxImage.altText}
              />}

              {item.featureBoxName &&
              <h5 className="feature__item-title">{item.featureBoxName}</h5>}

              {item.featureBoxContent &&
              <div className="feature__item-text"
                dangerouslySetInnerHTML={{
                __html: item.featureBoxContent
              }}/>}
            </div>
  });

  const customerList = page.bitcoinWhiteTrader.customersInvestRepeter.map(function(item, index) {
    return <div className="customer__item" key={index}>
          <div className="customer__item-image">
            <GatsbyImage
              image={item.investImage?.localFile?.childImageSharp?.gatsbyImageData}
              alt=""
              width={62}
              height={69}
            />
          </div>
            <p className="customer__item-text">{item.investText}</p>
        </div>
  });

  const currencyList = page.bitcoinWhiteTrader.currenciesRepeter.map(function(item, index) {
    return <div className="currency__item" key={index}>
            {item.currenciesImages &&
            <GatsbyImage
              image={item.currenciesImages?.localFile?.childImageSharp?.gatsbyImageData}
              alt=""
              width={140}
              height={157}
            />}
          </div>;
  });

  const faqList = page.signUpBitcoinWhiteTraderPage.faqBox.map(function(item, index) {
    return <div className="faq__item" key={index}>
        {item.faqName && <h6>{item.faqNumber} {item.faqName}</h6>}
        <div dangerouslySetInnerHTML={{
          __html: item.faqContent
        }} />
      </div>
  });

  return (
    <Layout page={page}>
      <Seo title="Title" description="Desc" lang={lang}/>
      <Header page={page}/>
      <BannerSection page={page} />

      <section className="feature">
        <div className="container">
          <h2 className="feature__title subtitle">{page.signUpBitcoinWhiteTraderPage.featuresHeadTitle}</h2>

          <div className="feature__body">
            {featureList}
          </div>

          <a href="#" className="button show-modal">
            {page.signUpBitcoinWhiteTraderPage.featuresBoxButton}
          </a>

        </div>
      </section>

      <section className="customer">
        <div className="container">
          <h2 className="customer__title subtitle">
            {page.bitcoinWhiteTrader.customersInvestHeading}
          </h2>
          <div className="customer__body">
            {customerList}
          </div>
        </div>
      </section>

      <section className="currency">
        <div className="container">
          <h2 className="currency__title subtitle">{page.bitcoinWhiteTrader.currenciesHeading}</h2>
          <div className="currency__body">
            <Slider {...sliderSettings}>
              {currencyList}
            </Slider>
          </div>
          <a href="#" className="button show-modal">
            {page.bitcoinWhiteTrader.currenciesButton}
          </a>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="faq__title subtitle">{page.signUpBitcoinWhiteTraderPage.faqHeadTitle}</h2>

          <div className="faq__body faq-html">
            {faqList}
          </div>

          {page.signUpBitcoinWhiteTraderPage.faqBottomContentLeft &&
          (<div className="faq__depth">
            <h2 className="faq__depth-title">{page.signUpBitcoinWhiteTraderPage.faqBottomContentTitle}</h2>
            <div className="faq-html">
              <div dangerouslySetInnerHTML={{
                  __html: page.signUpBitcoinWhiteTraderPage.faqBottomContentLeft
                }} />
              <div dangerouslySetInnerHTML={{
                  __html: page.signUpBitcoinWhiteTraderPage.faqBottomContentRight
                }} />
            </div>
          </div>)}

          {page.bitcoinWhiteTrader.currenciesButton &&
          <a href="#" className="button show-modal">{page.bitcoinWhiteTrader.currenciesButton}</a>}
        </div>
      </section>

      <footer>
        <div className="container" dangerouslySetInnerHTML={{
          __html: page.bitcoinWhiteTrader.bottomText
        }} />
      </footer>

    </Layout>
  )
}

export default IndexPage
