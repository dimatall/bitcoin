import React from "react"
import { Link as GatsbyLink, navigate } from "gatsby";
import Cookie from 'universal-cookie';
import {LANGUAGES, checkEnvVars} from "../config/config";

import "../css/layout.scss"
import {useLocation} from "@reach/router";

checkEnvVars();

const Link = ({ to, lang, className, children }) => {
  const cookie = new Cookie();
  const location = useLocation();
  const languagesList = LANGUAGES.split('|');
  const urlParams = location.pathname.split('/');
  let selected = ['en'];
  let url;

  if (languagesList.includes(urlParams[1])) {
    selected = urlParams.splice(1,1);
  }

  selected = lang || selected[0];

  if (selected !== 'en') {
    url = `/` + selected + to;
  } else {
    url = to;
  }

  function setLanguageCookie(lang) {
    cookie.set('lang', lang);
  }

  return (
      <GatsbyLink to={url}
                  className={className}
                  onClick={() => setLanguageCookie(selected)}
      >
        {children}
      </GatsbyLink>
  )
}

export default Link
