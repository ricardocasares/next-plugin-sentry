import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { getDsn, getRelease } from "./env";

export default async function initServer(...args) {
  console.log("on-init-server");
  console.log("hook args:", ...args);

  // NOTE: We cannot use `getConfig` from `next/config` here as it always return undefined at this point.
  // This prevents us from doing the same thing as in examples/with-sentry
  // `${config.serverRuntimeConfig.rootDir}/.next`
  // We need to "assume" that common prefix is everything before and including `.next`.
  // — Kamil

  Sentry.init({
    dsn: getDsn(),
    ...(getRelease() && { release: getRelease() }),
    integrations: [
      new RewriteFrames({
        iteratee: (frame) => {
          try {
            const [_, path] = frame.filename.split(".next/");
            if (path) {
              frame.filename = `app:///_next/${path}`;
            }
          } catch {}
          return frame;
        },
      }),
    ],
  });
}
