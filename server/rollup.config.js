import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.js",

  output: {
    file: "dist/index.cjs",
    exports: "named",
    format: "cjs",
  },
  external: [/.json/, /node_modules/],

  plugins: [commonjs(), resolve()],
};
