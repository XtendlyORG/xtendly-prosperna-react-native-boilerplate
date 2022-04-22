module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        semi: ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'react/require-default-props': ['off'],
        'react/default-props-match-prop-types': ['error'],
        'react/sort-prop-types': ['error'],
        'types.d.ts(59, 5)': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
}
