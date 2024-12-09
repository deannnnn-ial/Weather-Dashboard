import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import babelParser from "@babel/eslint-parser";

export default [
  {
    files: ["**/*.js"], // Target all .js files
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: babelParser, // Use Babel parser
      parserOptions: {
        requireConfigFile: false, // Allows parsing without a Babel config file
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
        babelOptions: {
          plugins: ["@babel/plugin-syntax-jsx"], // Enable JSX plugin
        },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // React-specific rules
      "react/react-in-jsx-scope": "off", // For React 17+ JSX Transform
      "react/jsx-key": "error", // Require `key` props in lists
      "react/jsx-uses-vars": "error", // Prevent unused variables in JSX
      // General rules
      "no-unused-vars": "warn", // Warn for unused variables
      "no-console": "warn", // Warn for console.log statements
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
];
