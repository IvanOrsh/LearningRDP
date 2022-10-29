module.exports = test => {
  // Addition:
  test('2 + 2', {
    type: 'Program',
    body: [
      {
        type: 'ExpressionStatement',
        expression: {
          type: 'BinaryExpression',
          operator: '+',
          left: {
            type: 'NumericLiteral',
            value: 2,
          },
          right: {
            type: 'NumericLiteral',
            value: 2,
          },
        },
      },
    ],
  });
};
