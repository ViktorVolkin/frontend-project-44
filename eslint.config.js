export default [
  {
    files: ['**/*.js'],
    languageOptions: { ecmaVersion: 2022, sourceType: 'module' },
    rules: {
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-tabs': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
    },
    ignores: ['node_modules/', 'dist/'],
  },
]
