'use strict';

const Sensubility = require('./../app.js');

require('mocha');
require('should');

describe('Sensubility', function () {
  let myserver = {};
  it('should create without issue', function () {
    myserver = new Sensubility();
    myserver.should.be.instanceof(Sensubility);
  });
});
