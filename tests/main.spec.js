const expect = require('chai').expect;

describe('Main', () => {
  let arr;
  // roda uma vez antes do bloco
  before(() => {
    // inicia a conexão no banco
  });

  // Roda uma vez depois do bloco
  after(() => {
    // fecha a conexão no banco
  });

  // Roda todas as vezes, antes de cada bloco
  beforeEach( () => {
    arr = [1, 2, 3];
  });

  // Roda todas as vezes, após cada bloco
  afterEach(() => {

  });
  it('Should be an array', () => {
    expect(arr).to.be.a('array');
  })

  it('Should have a size of 4 when push another value to array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4); // 4
  });

  it('Should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.length(2); // 2
  });

  it('Should remove 3 when user pop another the array ', () => {
    expect(arr).to.include(3); // true
  });
});
