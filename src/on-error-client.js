import * as Sentry from "@sentry/browser";

export default async function onErrorClient(...args) {
  console.log("on-error-client");
  console.log("hook args:", ...args);

  Sentry.captureException(args[0].err || args[0]);
}
