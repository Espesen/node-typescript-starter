import { doThing } from "../module";

describe('a module', () => {
  describe('a method', () => {
    it('should do a thing', () =>
      expect(doThing()).withContext('answer to everything').toBe(42));
  });
});