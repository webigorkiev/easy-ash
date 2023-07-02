import {defineConfig} from "vitest/config";
import * as path from "path";
export default defineConfig({
    resolve: {
        alias: [
            {
                find: /^~(.+)/,
                replacement: path.resolve("./node_modules") + "/$1"
            },
            {
                find: /@\/(.*)/,
                replacement: path.resolve("./src") + "/$1"
            }
        ],
    },
    plugins: []
});