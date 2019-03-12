module.exports = {
  extends: 'standard',
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    'standard',
    'plugin:promise/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  rules: {
    // когда импортировал и использовал интерефейсы, выдавало такую ошибку https://github.com/eslint/typescript-eslint-parser/issues/77
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // eslint-plugin-babel (не работают)
    // "babel/camelcase": 1,
    // "babel/no-unused-expressions": 2,

    // Vue
    'vue/no-v-html': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint', // babel-eslint чтобы optional chaining работало, без этого не работает
  }
}
