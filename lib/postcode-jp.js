/*
 * postcode-jp
 * https://github.com/sanemat/postcode-jp
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

function PostcodeJp(opts, cb) {
  opts = opts || {};
  this.cb = null;
  if (cb) { this.cb = cb; }
  if (typeof opts === 'function') { this.cb = opts; }
  this.postcode = opts.postcode;
}

PostcodeJp.prototype.addresses = function(callback) {
  var address = { pref: '北海道', region: '札幌市中央区', town: '大通東' };
  var addresses = [];
  addresses.push(address);
  callback(addresses);
};

module.exports = function(opts, cb) {
  var s = new PostcodeJp(opts, cb);

  if (s.cb) { s.on('error', s.cb); }
  return s;
};

module.exports.PostcodeJp = PostcodeJp;
