const withSentry = require("./source-maps-plugin");
const withSourceMaps = require("@zeit/next-source-maps");
const withSentrySourceMaps = (config) =>
  withSentry()(
    withSourceMaps({
      devtool: "hidden-source-map",
    })(config)
  );

exports.withSentry = withSentry;
exports.withSourceMaps = withSourceMaps;
exports.withSentrySourceMaps = withSentrySourceMaps;

// TODO: Somehow hack this into next.js directly?
exports.SentryBrowser = require("@sentry/browser");
exports.SentryNode = require("@sentry/node");
exports.RewriteFrames = require("@sentry/integrations").RewriteFrames;
