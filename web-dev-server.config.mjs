import { fileURLToPath } from "url"
import { esbuildPlugin } from "@web/dev-server-esbuild"

export default {
  nodeResolve: true,
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(new URL("./tsconfig.json", import.meta.url))
    })
  ],
}
