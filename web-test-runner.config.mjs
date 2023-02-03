import { fileURLToPath } from "url"
import { esbuildPlugin } from "@web/dev-server-esbuild"
import { playwrightLauncher } from '@web/test-runner-playwright'

export default {
  "esbuild-target": "auto",
  files: [ "src/tests/unit/**/canary_tests.ts" ],
  nodeResolve: true,
  testFramework: {
    config: {
      ui: "tdd"
    }
  },
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'firefox' }),
  ],
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url))
    })
  ],
}
