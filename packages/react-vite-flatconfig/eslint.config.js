import parser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import noExcessProperty from "eslint-plugin-no-excess-property";

export default [
  {
    languageOptions: {
      parser,
      parserOptions: {
        project: true,
        sourceType: "module",
      },
    },
  },
  ...tseslint.configs.recommended,
  {
    plugins: { "no-excess-property": noExcessProperty },
    rules: {
      "no-excess-property/no-excess-property": [
        "error",
        {
          skipWords: [
            "ReactNode",
            "Element",
            "ReactElement",
            "ReactNodeArray",
            "ReactElementArray",
          ],
          skipProperties: [],
          checkJsx: true,
          checkClass: false,
        },
      ],
    },
  },
];
