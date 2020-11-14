import { expect } from 'chai';
import { sum } from './../add.js';

describe('Add', function() {
  describe('addUtility', function() {
    it('should have a sum method', function() {
      expect(addUtility).to.be.an('object');
      expect(addUtility).to.have.property('sum');
    })

    it('addUtility.sum(5, 4) should return 9', function() {
      expect(sum(5, 4)).to.deep.equal(9);
    })

    it('addUtility.sum(100, 6) should return 9', function() {
      expect(sum(100, 6)).to.deep.equal(106);
    })
  })
});
