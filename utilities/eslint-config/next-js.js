import { baseConfig } from './index.js'

/** @type {import("eslint").Linter.Config} */
export const nextJsConfig = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals'
  ],
  overrideConfig: {
    linterOptions: {
      reportUnusedDisableDirectives: true
    }
  }
}
