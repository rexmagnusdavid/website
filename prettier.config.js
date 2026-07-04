/** @type {import("prettier").Config} */
export default {
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
