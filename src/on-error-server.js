import * as Sentry from "@sentry/node";

export default async function onErrorServer(...args) {
  console.log("on-error-server");
  console.log("hook args:", ...args);

  Sentry.captureException(args[0].err || args[0]);
}
