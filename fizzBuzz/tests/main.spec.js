/*
If number is multiple of 3 return 'Fizz'
If number is multiple of 5 return 'Buzz'
If number is multiple of 3 and 5 return 'FizzBuzz'

If number doesn't multiple of nothing return the number.
*/
import { expect } from 'chai';
import FizzBuzz from '../src/main';

describe('Main', () => {
  it('Should return Fizz when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Should return Buzz when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Should return FizzBuzz when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Should return number when non-multiple of 3 and 5', () => {
    expect(FizzBuzz(8)).to.be.equal(8);
  });
});
