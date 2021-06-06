const path = require("path");

module.exports =  {
    entry: {
        index: "./src/index.ts",
        chunks: "./src/chunks.ts",
        clean: "./src/clean.ts",
        cloneClass: "./src/cloneClass.ts",
        cloneDeep: "./src/cloneDeep.ts",
        debounce: "./src/debounce.ts",
        diff: "./src/diff.ts",
        difference: "./src/difference.ts",
        groupBy: "./src/groupBy.ts",
        intersection: "./src/intersection.ts",
        isBrowser: "./src/isBrowser.ts",
        isClass: "./src/isClass.ts",
        isEmpty: "./src/isEmpty.ts",
        isFunction: "./src/isFunction.ts",
        isObject: "./src/isObject.ts",
        merge: "./src/merge.ts",
        omit: "./src/omit.ts",
        pick: "./src/pick.ts",
        pickBy: "./src/pickBy.ts",
        pull: "./src/pull.ts",
        pullAll: "./src/pullAll.ts",
        rand: "./src/rand.ts",
        replace: "./src/replace.ts",
        throttle: "./src/throttle.ts"
    },
    target: 'web',
    output: {
        filename: "[name].js",
        path: path.resolve('./dist'),
        library: {
            name: 'j$',
            type: "umd"
        },
        globalObject: "this",
        clean: true
    },
    optimization: {
        minimize: true
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".ts", ".tsx"],
        alias: {
            "@": path.resolve("./src/"),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    }
}