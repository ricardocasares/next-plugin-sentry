import * as Sentry from "@sentry/browser";
import { getDsn, getRelease } from "./env";

export default async function initClient() {
  console.log("on-init-client");

  Sentry.init({
    dsn: getDsn(),
    ...(getRelease() && { release: getRelease() }),
  });
}
