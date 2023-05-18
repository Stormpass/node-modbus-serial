// rollup.config.js
const commonjs = require("rollup-plugin-commonjs");
const json = require("@rollup/plugin-json");

module.exports = {
    input: {
        main: "./index.js"
    },
    output: {
        dir: "D:/moshi/moseed-collector-client/electron/libs/modbus-serial",
        format: "cjs"
    },
    plugins: [
        commonjs(),
        json()
    ]
};
