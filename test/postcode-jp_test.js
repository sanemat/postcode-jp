'use strict';

var postcodeJp = require('../lib/postcode-jp.js');
var assert = require('power-assert');

describe('fake implementation', function(){
  var postcode;

  before(function(done){
    postcode = postcodeJp({ postcode: '0600041' });
    done();
  });

  it('should return address', function(done){
    postcode.addresses(function(addresses){
      var address = addresses[0];
      assert.equal(address.pref, '北海道');
      assert.equal(address.region, '札幌市中央区');
      assert.equal(address.town, '大通東');
      done();
    });
  });
});
