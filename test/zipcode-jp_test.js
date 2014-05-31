'use strict';

var zipcodeJp = require('../lib/zipcode-jp.js');
var assert = require('assert');

describe('awesome', function(){
  it('should be awesome', function(){
    assert.equal(zipcodeJp.awesome(), 'awesome');
  });
});
