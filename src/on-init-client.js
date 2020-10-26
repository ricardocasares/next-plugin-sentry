import { init } from "@sentry/browser";
import getConfig from "next/config";

import { getDsn, getRelease } from "../env";
import { clientConfig } from "../config";

export default async function initClient() {
  console.log("on-init-client");

  const { publicRuntimeConfig = {} } = getConfig();
  const runtimeConfig = publicRuntimeConfig.sentry || {};

  init({
    dsn: getDsn(),
    ...(getRelease() && { release: getRelease() }),
    ...runtimeConfig,
    ...clientConfig,
  });
}
