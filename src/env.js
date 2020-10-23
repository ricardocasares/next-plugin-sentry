// NOTE: This file will be detected as invalid middleware,
// `Next.js Plugin: Sentry listed invalid middleware env`
// But it's not changing functinality in any way. — Kamil

export const getDsn = () =>
  process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

export const getRelease = () =>
  process.env.SENTRY_RELEASE ||
  process.env.VERCEL_GITHUB_COMMIT_SHA ||
  process.env.VERCEL_GITLAB_COMMIT_SHA ||
  process.env.VERCEL_BITBUCKET_COMMIT_SHA;
