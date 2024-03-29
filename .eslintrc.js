module.exports = {
    plugins: [
        "@typescript-eslint",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": 2020,
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": "./",
        "createDefaultProgram": true
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        "@typescript-eslint/no-inferrable-types": "off",
        "no-debugger": "off",
        "no-console": "warn",
        "no-multiple-empty-lines": ["error", {max: 1, maxBOF: 0}],
        "useTabs": "off",
        "no-prototype-builtins": "off",
        "max-len": ["warn", {"code": 120, "ignoreStrings": true, "ignoreRegExpLiterals": true}],
        "space-before-blocks": ["error", "always"],
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "block-spacing": ["error", "always"],
        "no-empty": ["error", {"allowEmptyCatch": true}],
        "keyword-spacing": ["error", {
            "overrides": {
                "if": {"after": false},
                "for": {"after": false},
                "while": {"after": false},
                "catch": {"after": false},
            }
        }],

        "padding-line-between-statements": ["error",
            {blankLine: "always", prev: "*", next: "return"},
            {blankLine: "always", prev: "*", next: "if"},
        ],
        "no-param-reassign": "off",
        "no-return-assign": "off",
        "no-sequences": "off",
        "no-shadow": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-console": "off"
    },
};
