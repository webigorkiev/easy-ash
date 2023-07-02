import {defineWorkspace} from "vitest/config";

export default defineWorkspace([

    {
        extends: "./vitest.config.ts",
        test: {
            name: 'helpers',
            root: "./src",
            environment: "node",
            globals: true,
            testTimeout: 15000,
            hookTimeout: 15000,
            threads: false
        },
    }
])