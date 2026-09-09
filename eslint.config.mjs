import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    rules: {
      // Signale les imports et variables oubliés, tolère la convention `_unused`.
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Site francophone : les apostrophes (l'Église, bureau d'étude) sont
      // omniprésentes et s'affichent correctement. Les échapper en &apos;
      // rendrait le contenu illisible en relecture.
      "react/no-unescaped-entities": "off",

      // Lecture de localStorage / matchMedia au montage : pattern volontaire
      // pour éviter les erreurs d'hydratation SSR. Signalé, non bloquant.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
