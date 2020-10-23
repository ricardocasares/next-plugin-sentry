import * as Sentry from "@sentry/browser";
import { getDsn, getRelease } from "./env";

export default async function initClient(...args) {
  console.log("on-init-client");
  console.log("hook args:", ...args);

  Sentry.init({
    dsn: getDsn(),
    ...(getRelease() && { release: getRelease() }),
  });
}
