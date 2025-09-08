import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      '@rocketseat/eslint-config/next',
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
    ],
    rules: {
      'prettier/prettier': ['error'],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/triple-slash-reference': 'off', // desativa a regra só neste projeto
    },
    ignorePatterns: [
      'node_modules/',
      'dist/',
      'build/',
      'next-env.d.ts', // adiciona o next-env.d.ts para ser ignorado
    ],
  }),
]

export default eslintConfig
