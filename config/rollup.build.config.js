import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
import banner2 from "rollup-plugin-banner2";

import pkg from "../package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/mobrix-designer-preview/index.cjs",
        format: "cjs",
        plugins: [],
      },
      {
        file: "playground/src/mobrix-designer-preview/index.mjs",
        format: "esm",
        plugins: [],
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
      },
      {
        file: pkg.module,
        format: "esm",
        plugins: [terser()],
      },
    ],
    plugins: [
      del({ targets: ["dist/*", "playground/src/mobrix-designer-preview"] }),
      banner2(() => `/* eslint-disable */`),
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
