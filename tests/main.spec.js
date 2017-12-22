const expect = require('chai').expect;
const calc = require('../src/main.js');

describe('Calc', () => {
  describe('smoke test', () => {
    it('Should exists the calc lib', () => {
      expect(calc).to.exist;
    });
    it('Should returned 4 when `sum(2, 2)`', () => {
      expect(calc.sum(2, 2)).to.be.equal(4);
    });
    it('Should returned 0 when `sub(2, 2)`', () => {
      expect(calc.sub(2, 2)).to.be.equal(0);
    });
    it('Should returned 1 when `div(2, 2)`', () => {
      expect(calc.div(2, 2)).to.be.equal(1);
    });
    it('Should returned "Não é possível divisão por 0" when `div(2, 0)', () => {
      expect(calc.div(2, 0)).to.be.equal("Não é possível divisão por 0");
    });
    it('Should returned 4 when `mult(2, 2)', () => {
      expect(calc.mult(2, 2)).to.be.equal(4);
    });
  });
});
