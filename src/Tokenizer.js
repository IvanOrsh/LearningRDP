/**
 * Tokenizer class.
 *
 * Lazily pulls a token from a stream.
 */
class Tokenizer {
  /**
   * Initializes the string.
   */
  init(string) {
    this._string = string;
    this._cursor = 0;
  }

  /**
   * Whether the tokenizer reached EOF.
   * @returns
   */
  isEOF() {
    return this._cursor === this._string.length;
  }

  /**
   * Whether we still have more tokens.
   * @returns Boolean
   */
  hasMoreTokens() {
    return this._cursor < this._string.length;
  }

  /**
   * Obtain next token
   */
  getNextToken() {
    if (!this.hasMoreTokens()) {
      return null;
    }

    const string = this._string.slice(this._cursor);

    // Numbers:
    if (!Number.isNaN(Number(string[this._cursor]))) {
      let number = '';
      while (!Number.isNaN(Number(string[this._cursor]))) {
        number += string[this._cursor++];
      }
      return {
        type: 'NUMBER',
        value: number,
      };
    }

    // String:
    if (string[this._cursor] === '"') {
      let s = '';
      do {
        s += string[this._cursor++];
      } while (string[this._cursor] !== '"' && !this.isEOF());
      s += this._cursor++; // skip closing "
      return {
        type: 'STRING',
        value: s,
      };
    }

    return null;
  }
}

module.exports = {
  Tokenizer,
};
