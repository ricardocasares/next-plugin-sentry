import { withScope, captureException } from "@sentry/browser";

export default async function onErrorClient({
  err,
  errorInfo,
  renderErrorProps,
  data,
  version,
}) {
  console.log("on-error-client");

  // TODO: Extract some useful metadata from the router and other arguments — Kamil

  withScope((scope) => {
    if (typeof errorInfo?.componentStack === "string") {
      scope.setContext("react", {
        componentStack: errorInfo.componentStack.trim(),
      });
    }
    captureException(err);
  });
}
