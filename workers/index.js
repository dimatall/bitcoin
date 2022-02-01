const DEBUG = true;

async function handleTranslation(request) {
  const body = await request.json();

  let translated;

  let term = body.term;

  if (typeof term === 'string' && Array.isArray(body.skip)) {
    body.skip.forEach((item, key) => {
      const regexp = new RegExp(item, 'g')
      term = term.replace(regexp, `%${key}%`)
    })

    let result = await translate(term, body.source, body.target);
    translated = result.data.translations[0].translatedText;

    body.skip.forEach((item, key) => {
      const regexp = new RegExp(`%${key}%`, 'g')
      translated = translated.replace(regexp, item);
    })
  } else {
    let result = await translate(term, body.source, body.target);
    translated = result.data.translations[0].translatedText;
  }
  return translated;
}

async function translate(term, source, target) {

  const translateData = {
    q: term,
    source: source,
    target: target,
  }
  const init = {
    body: JSON.stringify(translateData),
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  }
  const response = await fetch(GOOGLE_API_URL + GOOGLE_API_KEY, init);
  return await response.json();
}

function decode(encodedString) {
  var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
  var translate = {
    "nbsp": " ",
    "amp": "&",
    "quot": "\"",
    "lt": "<",
    "gt": ">"
  };
  return encodedString.replace(translate_re, function (match, entity) {
    return translate[entity];
  }).replace(/&#(\d+);/gi, function (match, numStr) {
    var num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message)
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("")
}

async function handlePostRequest(event) {
  const request = event.request;
  const body = await request.clone().text()
  const hash = await sha256(body);

  let translated = await WP_GATSBY_KV.get(hash)
  if (!translated) {
    translated = await handleTranslation(request)
    event.waitUntil(WP_GATSBY_KV.put(hash, translated))
  }
  return new Response(JSON.stringify(decode(translated)), {
    headers: {
      "content-type": "application/json;charset=UTF-8"
    }
  })
}

addEventListener("fetch", event => {
  try {
    const request = event.request
    if (request.method.toUpperCase() === "POST") {
      return event.respondWith(handlePostRequest(event))
    }
    return event.respondWith(new Response("Invalid method", {status: 403}));
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', {status: 500}))
  }
});
