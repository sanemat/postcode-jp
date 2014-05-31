'use strict';

var postcodeJp = require('../lib/postcode-jp.js');
var assert = require('power-assert');



describe('awesome', function(){
  it('should be awesome', function(){
    assert.equal(postcodeJp.awesome(), 'awesome');
  });
});
