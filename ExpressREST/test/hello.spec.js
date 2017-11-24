const sum = (a, b) => a + b;

const expect = require('chai').expect;

describe('maths', () => {

  describe('sum', () => {

    it('should returns 3 when called with 1 and 2', () => {

      expect(sum(1, 2)).to.equal(3)

    });

  });

});
