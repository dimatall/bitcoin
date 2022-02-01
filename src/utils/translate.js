const axios = require("axios");

const axiosInstance = axios.create()

async function googleTranslate(source, target, skip, term) {
  if (term === null || typeof term === 'undefined') return undefined

  const translateData = JSON.stringify({
    term,
    source,
    target,
    skip
  });

  const url = `https://translate.wp-gatsby.workers.dev/`
  const result = await axiosInstance({
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json',
    },
    data: translateData,
  });
  return result.data;
}

const translate = function (source, target, skip) {
  return googleTranslate.bind(googleTranslate, source, target, skip)
}

module.exports = translate;
