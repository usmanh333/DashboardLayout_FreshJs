import { Options } from "$fresh/plugins/twind.ts";

export default {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  selfURL: import.meta.url,
} as Options;
