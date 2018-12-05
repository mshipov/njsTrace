var expect = require('chai').expect;
var njsTrace = require('../njsTrace.js');
njsTrace.inject();

const fixtureFolders = [
    'commaOperator'
];

describe('njsTrace', () => {
  fixtureFolders.forEach(folder => {
    it(`testing "${folder}" handling`, () => {
      const input = require(`./fixtures/${folder}/input`);
      const expectedOutput = require(`./fixtures/${folder}/output`);

      expect(input.toString()).is.equal(expectedOutput)
    })
  });
});
