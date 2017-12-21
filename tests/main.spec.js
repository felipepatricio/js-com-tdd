const expect = require('chai').expect;
const calc = require('../src/main.js');

describe('Calc', () => {
  describe('smoke test', () => {
    it('Should exists the calc lib', () => {
      expect(calc).to.exist;
    });
    it('Should exists method `sum`', () => {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });
    it('Should exists method `sub`', () => {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });
    it('Should exists method `mult`', () => {
      expect(calc.mult).to.exist;
      expect(calc.mult).to.be.a('function');
    });
    it('Should exists method `div`', () => {
      expect(calc.div).to.exist;
      expect(calc.div).to.be.a('function');
    })
  });
});
