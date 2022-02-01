/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import Modal from "./Modal";
import LanguageSwitcher from "./LanguageSwitcher";
import setIframeIdAndSize from "../utils/iframe";

import "../css/layout.scss"

const Layout = ({ children }) => {

  useEffect(() => {
    if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
      document.querySelectorAll('iframe[data-src]').forEach(elem => {
        elem.setAttribute('src', elem.dataset.src);
        setIframeIdAndSize(elem);
      })
    }
  })

  return (
    <>
      <LanguageSwitcher />
      {children}
      <Modal/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}



export default Layout
