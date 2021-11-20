import Config from "../config";

const JWT_PROD_CONFIG = {
  URL: Config.hostProduction,
  baseURL: Config.hostProduction + '/api/' + Config.versionAPIProduction ,
  timeout: 30000,
  headers: { Accept: "application/json" },
  responseType: "json",
  responseEncoding: "utf8",
};

const JWT_DEV_CONFIG = {
  URL: Config.hostDevelopment,
  baseURL: Config.hostDevelopment + '/api/' + Config.versionAPIDevelopment ,
  timeout: 30000,
  headers: { Accept: "application/json" },
  responseType: "json",
  responseEncoding: "utf8",
};

const jwtServiceConfig =
  process.env.NODE_ENV === "production" ? JWT_PROD_CONFIG : JWT_DEV_CONFIG;

export default jwtServiceConfig;
