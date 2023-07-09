const esbuild = require('esbuild');
const esbuildPluginTsc = require('esbuild-plugin-tsc');
const { dtsPlugin } = require("esbuild-plugin-d.ts");

const path = require("path");
const fs = require("fs-extra");
const { gzipSync } = require('zlib');
const chalk = require("chalk");
const root = path.resolve("./dist");
const log = console.log;
const inputClient = [
    "./src/index.ts",
    "./src/chunks.ts",
    "./src/clean.ts",
    "./src/cloneClass.ts",
    "./src/cloneDeep.ts",
    "./src/debounce.ts",
    "./src/diff.ts",
    "./src/difference.ts",
    "./src/groupBy.ts",
    "./src/intersection.ts",
    "./src/isBrowser.ts",
    "./src/isClass.ts",
    "./src/isEmpty.ts",
    "./src/isFunction.ts",
    "./src/isObject.ts",
    "./src/omit.ts",
    "./src/pick.ts",
    "./src/pickBy.ts",
    "./src/pull.ts",
    "./src/pullAll.ts",
    "./src/rand.ts",
    "./src/replace.ts",
    "./src/throttle.ts",
    "./src/cookieParse.ts",
    "./src/cookieStringify.ts"
];

(async() => {
    log(chalk.green.bold("Start build bundle"));
    await fs.remove(root);
    log("Remove dist dir");
    await fs.mkdirp(root);
    await fs.copy("./LICENSE", path.resolve(root, "./LICENSE"));
    await fs.copy("./package.json", path.resolve(root, "./package.json"));
    await fs.copy("./README.md", path.resolve(root, "./README.md"));
    await fs.copy("./docs", path.resolve(root, "./docs"));
    const pkg = await fs.readJson(path.resolve(root, "./package.json"));
    pkg.private = false;
    await fs.writeJson(path.resolve(root, "./package.json"), pkg, {
        spaces: 2
    });
    log("Copy files to dist dir");
    await buildPlugin(inputClient, root);
    log("Build plugin client");
    log(chalk.green.bold("Build success"));
    await checkFileSize("./dist/index.js");
})();

/**
 * Build bundle by rollup
 * @returns {Promise<void>}
 */
const buildPlugin = async(input, root) => {
    await esbuild.build({
        target: "node18.0",
        platform: "node",
        color: true,
        entryPoints: input,
        outdir: root,
        bundle: true,
        format: "cjs",
        plugins: [
            dtsPlugin(),
            esbuildPluginTsc({
                force: true
            }),
        ],
    });
};

// Check size of file
const checkFileSize = async(filePath) => {

    if(!fs.existsSync(filePath)) {
        return;
    }
    const file = await fs.readFile(filePath);
    const minSize = (file.length / 1024).toFixed(2) + 'kb';
    const gzipped = gzipSync(file);
    const gzippedSize = (gzipped.length / 1024).toFixed(2) + 'kb';

    log(
        `${chalk.gray(
            chalk.bold(path.basename(filePath))
        )} min:${minSize} / gzip:${gzippedSize}`
    );
};