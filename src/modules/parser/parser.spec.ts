import { Parser } from "./parser";
import fs = require('fs');

describe('Class Parser', () => {

  let parser: Parser;
  let testHtml: string;

  beforeEach((done) => {
    parser = new Parser();
    if (testHtml) {
      return done();
    }
    fs.readFile('./src/modules/parser/varauslistaus.html', (err, result) => {
      if (err) {
        return done.fail(err);
      }
      testHtml = result.toString();
      done();
    });    
  });

  describe('method extractAddressesFromHtml', () => {

    it('will return an array of email addresses', () => {
      const result = parser.extractAddressesFromHtml(testHtml);
      expect(result.length).toBe(41);
      result.forEach(item => expect(item).toMatch(/\w+@\w+\.\w+/));
    });

  });
});
