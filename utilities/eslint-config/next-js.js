import { baseConfig } from './index.js'

/** @type {import("eslint").Linter.Config} */
export const nextJsConfig = {
  extends: [
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals'
  ],
  parserOptions: {
    project: true
  },
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
}
