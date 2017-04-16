/*
 * postcode-jp
 * https://github.com/sanemat/postcode-jp
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

function addresses(opts, cb) {
//  var postcode = opts.postcode;
  var address = { pref: '北海道', region: '札幌市中央区', town: '大通東' };
  var lists = [];
  lists.push(address);
  cb(lists);
}

module.exports.addresses = addresses;
