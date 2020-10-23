import * as Sentry from "@sentry/node";

export default async function onErrorServer({ err }) {
  console.log("on-error-server");
  Sentry.captureException(err);
  await Sentry.flush(2000);
}
