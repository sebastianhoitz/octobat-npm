'use strict';

var OctobatResource = require('../OctobatResource');
var utils = require('../utils');

module.exports = OctobatResource.extend({
  path: 'credit_note_numbering_sequences',
  includeBasic: [
    'list'
  ],
});
