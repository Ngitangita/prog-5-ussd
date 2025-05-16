import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import checkFile from "eslint-plugin-check-file";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
     ignores: [
            "node_modules/**",
            "dist/**",
            "build/**",
            "eslint.config.js",
        ],
    plugins: {
      "check-file": checkFile,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      camelcase: "error",
      "prefer-const": "error",
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{js,jsx}": "CAMEL_CASE",
        },
      ],

      "check-file/folder-naming-convention": [
        "error",
        {
          "**/": "CAMEL_CASE",
        },
      ],

      "id-match": [
        "error",
        "^[a-z][a-zA-Z0-9]*$",
        {
          onlyDeclarations: true,
          properties: false,
        },
      ],

      "new-cap": [
        "error",
        {
          newIsCap: true,
          capIsNew: false,
        },
      ],
    },
  },
]);
