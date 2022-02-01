const pageBuilder = require("./src/builder");

const languages = process.env.GATSBY_LANGUAGES.split('|');
const skip = process.env.GATSBY_SKIP.split('|');

const IndexTemplate = require.resolve("./src/templates/index.js");
const IndexQuery = require("./src/queries/index.js");

const AboutTemplate = require.resolve("./src/templates/index.js");
const AboutQuery = require("./src/queries/index.js");

const Pages = [
  {
    template: IndexTemplate,
    slug: '/',
    ...IndexQuery,
  },
  {
    template: AboutTemplate,
    slug: '/about',
    ...AboutQuery,
  },
];


exports.createPages = async (hooks) => {
  await Promise.all(Pages.map(async config => {
    return await pageBuilder({...hooks, ...config, languages, skip});
  }));
}
