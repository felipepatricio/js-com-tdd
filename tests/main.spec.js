import { expect } from 'chai';

import { sum, sub, div, mult } from '../src/main';

describe('Calc', () => {
  describe('smoke test', () => {
    it('Should returned 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
    it('Should returned 0 when `sub(2, 2)`', () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
    it('Should returned 1 when `div(2, 2)`', () => {
      expect(div(2, 2)).to.be.equal(1);
    });
    it('Should returned Não é possível divisão por 0" when `div(2, 0)', () => {
      expect(div(2, 0)).to.be.equal('Não é possível divisão por zero');
    });
    it('Should returned 4 when `mult(2, 2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
});
