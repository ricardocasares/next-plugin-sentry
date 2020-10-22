// TODO: Decide whether we want to use @sentry/react or @sentry/browser — Kamil
import * as Sentry from "@sentry/react";
import { getDsn, getRelease } from "./env";

export default async function initClient(...args) {
  console.log("on-init-client");
  console.log("hook args:", ...args);

  Sentry.init({
    dsn: getDsn(),
    ...(getRelease() && { release: getRelease() }),
  });
}
