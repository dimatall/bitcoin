const getTranslator = require("./utils/translate.js");

let translate;

module.exports = async function ({graphql, reporter, query, slug, languages, skip, template, trans, actions: {createPage}}) {
  const wordpress = await graphql(query);

  if (wordpress.errors) {
    reporter.panicOnBuild(
      `There was an error loading home page data`,
      wordpress.errors
    )
    return
  }

  let original = wordpress.data.allWpPage.edges.find(elem => {
    return elem.node.template.templateName === 'Switcher Bitcoin White Trader'
  }).node.template;

  createPage({
    path: slug,
    component: template,
    context: {page: original, lang: 'en'},
  })

  for (const i in languages) {
    const lang = languages[i];

    reporter.info(`Start translation /${lang}${slug}`)

    translate = getTranslator('en', lang, skip);
    const page = await translateStructure(trans, original);

    reporter.info(`End translation /${lang}${slug}`)

    reporter.info(`Create page: /${lang}${slug}`)

    createPage({
      path: `/${lang}` + slug,
      component: template,
      context: {page, lang},
    });

    reporter.info(`End page creation: /${lang}${slug}`)
  }
};



function isArrayNode(node, property) {
  return node && node[property] && Array.isArray(node[property])
}

function isObjectNode(node, property) {
  return typeof node[property] === 'object'
}

const translateStructure = async function (structure, node, translation = {}) {
  for (const prop in node) {
    if (isObjectNode(structure, prop)) {
      if (isArrayNode(node, prop)) {
        const asyncMap = node[prop].map(
          async nodeItem => await translateStructure(structure[prop], nodeItem)
        )
        translation[prop] = await Promise.all(asyncMap)
      } else {
        translation[prop] = {}
        await translateStructure(structure[prop], node[prop], translation[prop])
      }
    } else {
      if (isArrayNode(node, prop)) {
        if (structure[prop]) {
          const asyncMap = node[prop].map(async nodeItem => await translate(nodeItem))
          translation[prop] = await Promise.all(asyncMap)
        } else {
          translation[prop] = node[prop]
        }
      } else {
        translation[prop] = structure[prop] ? await translate(node[prop]) : node[prop]
      }
    }
  }

  return translation
}
