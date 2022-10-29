/**
 * Main test runner.
 */

const { Parser } = require('../src/Parser');
const assert = require('assert');

/**
 * List of tests.
 */
const tests = [
  require('./literal-test'),
  require('./statement-list'),
  require('./block-test'),
  require('./empty-statement'),
  require('./math-test'),
  require('./assignment-test'),
  require('./variable-test'),
];

const parser = new Parser();

/**
 * For manual tests.
 */
function exec() {
  const program = `
    let y;
    let a, b;
    let c, d = 10;
    let x = 42;
    r = 10;
    let foo = bar = 10;
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 5));
}

// Manual test:
exec();

/**
 * Test function.
 */
function test(program, expected) {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
}

// Run all tests:
tests.forEach(testRun => testRun(test));
console.log('All assertions passed!');
