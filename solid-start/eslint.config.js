// @ts-check

// @ts-ignore
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
// @ts-ignore
import eslintImport from "eslint-plugin-import";

import solid from 'eslint-plugin-solid';

// @ts-ignore
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();


export default tseslint.config(
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'src/tsconfig.json',
      'src/stories',
      '**/*.css',
      'node_modules/**/*',
      './.next/*',
      'out',
      '.storybook',
      'dist',
      '.vinxi',
      '.output',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylistic,
      '@stylistic/jsx': stylistic,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/jsx/jsx-indent': ['error', 2],
      "comma-dangle": ["error", "always-multiline"],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      import: eslintImport,
      solid,
    },
    // @ts-ignore
    extends: [
      ...tseslint.configs.recommended,
      // @ts-ignore
      ...compat.config(eslintImport.configs.recommended),
      // @ts-ignore
      ...compat.config(eslintImport.configs.typescript),
    ],
    settings: {
      'import/internal-regex': '^~/',
      'import/resolver': {
        node: {
          extensions: ['.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/no-duplicates': 'off',
      'import/default': 'off',
    }
  },
  {
    rules: {
      semi: ["error", "always"],
    },
  },
);
