const { serverConfig, clientConfig } = require("./config.js");

exports.Sentry = require("@sentry/minimal");
exports.serverConfig = serverConfig;
exports.clientConfig = clientConfig;
