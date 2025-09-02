import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

const eslintConfig = [
  {
    ignores: ["lib/generated/prisma/**"] // 👈 ignore prisma generated code
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off"
    }
  })
];

// const eslintConfig = [
//   ...compat.config({
//     extends: ["next/core-web-vitals", "next/typescript"],
//     rules: {
//       "react/no-unescaped-entities": "off",
//       "@next/next/no-page-custom-font": "off",
//       "@typescript-eslint/no-unused-vars": "off",
//       "@typescript-eslint/no-unused-expressions": "off"
//     }
//   })
// ];

export default eslintConfig;
