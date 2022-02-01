// import {navigate} from "gatsby";
// import Cookie from "universal-cookie";
// import {LANGUAGES} from "./src/config/config";
//
// export const onRouteUpdate = ({location}) => {
//   const cookie = new Cookie();
//
//   if (!cookie.get('lang')) {
//     const url = location.pathname.split('/');
//     const languagesList = LANGUAGES.split('|');
//     let langSlug = "en";
//
//     if (languagesList.includes(url[1])) {
//       url.splice(1,1);
//     }
//     const urlWithoutLanguage = url.join('/');
//
//     switch (getBrowserLanguage()) {
//       case "fr":
//         langSlug = "fr";
//         break;
//     }
//
//     cookie.set('lang', langSlug);
//
//     langSlug = langSlug === "en" ? '' : langSlug;
//     const redirectUrl = urlWithoutLanguage === "/" ? '' : urlWithoutLanguage;
//
//     navigate(`${location.origin}/${langSlug}${redirectUrl}`, {replace: true});
//   }
//
//
//   function getBrowserLanguage() {
//     if (typeof navigator === `undefined`) {
//       return null;
//     }
//     const lang = navigator && navigator.language && navigator.language.split("-")[0];
//     if (!lang) return null;
//
//     return lang;
//   }
// }
