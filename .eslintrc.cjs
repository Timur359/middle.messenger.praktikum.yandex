module.exports = {
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  env: {
    es6: true,
    browser: true,
    amd: false,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".ts", ".hbs"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  plugins: ["@typescript-eslint", "import", "promise", "html"],
  rules: {
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "sibling", "index", "type"],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "after",
          },
        ],
        "newlines-between": "always",
      },
    ],
    "no-restricted-imports": ["error", { patterns: ["../*"] }],
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "prefer-const": [
      "warn",
      {
        destructuring: "any",
        ignoreReadBeforeAssign: false,
      },
    ],
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-tabs": ["error", { allowIndentationTabs: true }],
    quotes: ["warn", "double"],
    "no-trailing-spaces": ["warn"],
    "space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "never" },
    ],
    semi: ["warn", "always", { omitLastInOneLineBlock: true }],
    "semi-style": ["warn", "last"],
    "@typescript-eslint/no-extra-semi": ["warn"],
    curly: ["warn", "all"],
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "comma-dangle": [
      "warn",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "only-multiline",
      },
    ],
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-return-assign": "off",
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "before", ":": "before" } },
    ],
    "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
    "no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/comma-dangle": [
      "warn",
      {
        generics: "ignore",
        objects: "always-multiline",
        arrays: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "eol-last": ["error", "always"],
  },
};
