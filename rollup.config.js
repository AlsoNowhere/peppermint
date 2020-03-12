
import { uglify } from "rollup-plugin-uglify";
import progress from "rollup-plugin-progress";

const devOutput = {
    file: "./dist/ppt.js",
    format: "iife",
    sourcemap: true
};

export default {
    input: "./src/main.js",
    output: devOutput,
    plugins: [
        progress(),
        // uglify()
    ]
};
