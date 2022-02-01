/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import { Link as GatsbyLink } from "gatsby";
import { useLocation } from '@reach/router';
import Link from './Link';
import {LANGUAGES} from "../config/config";

import "../css/languageSwitcher.scss"

const languageNames = {
  en: 'English',
  da: 'Danish',
  nl: 'Dutch',
  fi: 'Finish',
  fr: 'French',
  de: 'German',
  it: 'Italian',
  no: 'Norwegian',
  pl: 'Polish',
  pt: 'Portuguese',
  es: 'Spanish',
  sv: 'Swedish',
  ru: 'Russian',
}

const LanguageSwitcher = () => {
  const location = useLocation();
  const [isActive, setActive] = useState(false);
  const languagesList = LANGUAGES.split('|');
  const fullLanguagesList = ['en', ...languagesList];
  const url = location.pathname.split('/');
  let selected = ['en'];

  if (languagesList.includes(url[1])) {
    selected = url.splice(1,1);
  }

  const urlWithoutLanguage =  url.join('/');

  const i = fullLanguagesList.indexOf(selected[0]);
  if (i !== -1) {
    fullLanguagesList.splice(i, 1);
  }

  const switcherList = fullLanguagesList.map((lang, k) => {
    const name = languageNames[lang];
    return <Link to={urlWithoutLanguage}
                 lang={lang}
                 key={k}
            >
              {name}
            </Link>
  });

  function toggle(event) {
    event.preventDefault();
    setActive(!isActive)
  }

  return (
    <section className={isActive ? "language-switcher language-switcher__active" : "language-switcher"}>
      <div className="language-switcher__selected">
        <GatsbyLink
          to="#"
          onClick={toggle}
        >
          {languageNames[selected]}
        </GatsbyLink>
      </div>
      <div className="language-switcher__list">
        {switcherList}
      </div>
    </section>
  )
}

export default LanguageSwitcher
