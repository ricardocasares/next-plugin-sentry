# Next.js + Sentry

Capture unhandled exceptions with Sentry in your Next.js project.

## Installation

```
npm install kamilogorek/next-plugin-sentry
```

or

```
yarn add kamilogorek/next-plugin-sentry
```

Provide necessary env variables through `.env` or any other way

```
NEXT_PUBLIC_SENTRY_DSN

// variables below are required only when using with source maps upload
NEXT_PUBLIC_SENTRY_RELEASE
SENTRY_PROJECT
SENTRY_ORG
SENTRY_AUTH_TOKEN
```

### Usage

Create a next.config.js

```js
module.exports = {
  experimental: { plugins: true }
}
```

## Source Maps

Upload source maps to Sentry during production build in your Next.js project

Create a next.config.js

```js
const { withSentrySourceMaps } = require('kamilogorek/next-plugin-sentry');

module.exports = withSentrySourceMaps({
  webpack(config, options) {
    return config
  }
})
```

Then you can run a regular build command and source maps will be outputted and uploaded to Sentry for the bundles

```bash
npm run build
```

### Configuring plugin

If you want to configure Sentry Webpack Plugin, you need to use non-preconfigured version of wrappers instead.

```js
const { withSentry, withSourceMaps } = require('kamilogorek/next-plugin-sentry');

const sentry = withSentry({
  configKey: 'configValue'
})
const sourceMaps = withSourceMaps({
  devtool: 'hidden-source-map'
})

module.exports = sentry(sourceMaps({
  webpack(config, options) {
    return config
  }
}))
```