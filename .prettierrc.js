module.exports = {
  semi: false, //语句末尾是否有分号
  singleQuote: true, //单引号
  trailingComma: 'all', //尾逗号
  arrowParens: 'always', //箭头函数带括号
  quoteProps: 'consistent', //对象属性引号一致性
  jsxBracketSameLine: false, // 标签的反尖括号不折行
  printWidth: 180,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
}
