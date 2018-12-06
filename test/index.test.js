var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;
var njsTrace = require('../njsTrace.js');
var Injector = require('../lib/injector');

//mock getTmpVarName
Injector.prototype.getTmpVarName = function() {
  return 'tmpVar';
};

njsTrace.inject();

const fixtureFolders = [
    'commaOperator'
];

const normalizeOutput = str => str.replace(/[\n\r\s]/g, '');

describe('njsTrace', () => {
  fixtureFolders.forEach(folder => {
    it(`testing "${folder}" handling`, () => {
      const input = require(`./fixtures/${folder}/input`);
      const expectedOutput = fs.readFileSync(path.join('test', 'fixtures', folder, 'output.js'), { encoding: 'utf-8' });
      const fixtureDirPath = path.join(__dirname, 'fixtures', folder).replace(/\\/g, '\\\\')

      expect(normalizeOutput(input.toString())).is.equal(normalizeOutput(expectedOutput.replace('{{dirname}}', fixtureDirPath)))
    })
  });
});
