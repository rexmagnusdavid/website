import { defineConfig } from "eslint/config";

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"],
  eslintPluginReact.configs.flat["jsx-runtime"],
  eslintPluginUnicorn.configs.recommended,
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
]);
