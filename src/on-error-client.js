import * as Sentry from "@sentry/browser";

export default async function onErrorClient({ err }) {
  console.log("on-error-client");
  Sentry.captureException(err);
}
