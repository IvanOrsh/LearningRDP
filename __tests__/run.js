/**
 * Main test runner.
 */

const { Parser } = require('../src/Parser');
const assert = require('assert');

/**
 * List of tests.
 */
const tests = [require('./literal-test')];

const parser = new Parser();

/**
 * For manual tests.
 */
function exec() {
  const program = `
    /**
     * Documentation comment:
     */
    "hello";
  
    // Number
    42;
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 2));
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
