module.exports = {
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  endOfLine: 'auto',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '^(next/(.*)$)|^(next$)',
    '^@/libs/(.*)$',
    '^@/public/(.*)$',
    '^types$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
