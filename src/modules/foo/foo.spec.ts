import { Foo } from './foo';

describe('class Foo', () => {

  describe('method foo', () => {
    it('should double a number', () => {
      const num = 4;
      expect(new Foo().foo(num)).toBe(num * 2);
    });
  });
});
