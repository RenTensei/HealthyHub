module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/react',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-hooks', 'react-refresh', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'warn',
    // 'prefer-arrow-callback': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index', 'type'],
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react-refresh/only-export-components': 'off',
    'no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'off',
  },
};
