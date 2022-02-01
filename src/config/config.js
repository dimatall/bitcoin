export const LANGUAGES = process.env.GATSBY_LANGUAGES;
export const SKIP = process.env.GATSBY_SKIP;

const envVars = [
  {name: "LANGUAGES", value: LANGUAGES},
  {name: "SKIP", value: SKIP}
]

export const checkEnvVars = () => {
  const envVarsNotLoaded = envVars.filter((envVar) => envVar.value === undefined);
  if (envVarsNotLoaded.length > 0) {
    throw new Error(`Could not load env vars ${envVarsNotLoaded.map(item => item.value).join(",")}`);
  }
}
