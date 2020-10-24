import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";
import { getDsn, getRelease } from "../env";

export default async function initServer() {
  console.log("on-init-server");

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
