import { nextJsConfig } from "@repo/eslint-config/next-js";

export default [
  ...nextJsConfig,
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/dist/**',
      '**/static/chunks/**',
      '**/_buildManifest.js',
      '**/_ssgManifest.js'
    ]
  }
];
