import * as esbuild from "esbuild";
import { denoPlugins } from "@luca/esbuild-deno-loader";

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["src/client/mod.tsx"],
  outfile: "public/app.js",
  bundle: true,
  minify: true,
  format: "esm",
});

await esbuild.stop();
