'use strict';

var Optionall = require('../lib/optionall.js')
  , Path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['optionall'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'standard options': function(test) {
    test.expect(3);

    var options = new Optionall();

    test.ok(options.name === 'optionall');
    test.ok(options.aws.accessKeyId === 'fake');
    test.ok(options.user === process.env.USER);

    test.done();
  },
  'explicit directory': function(test) {
    test.expect(3);

    var options = new Optionall(Path.join(process.cwd(), 'node_modules/jsbelt'));

    test.ok(options.name === 'jsbelt');
    test.ok(!options.aws);
    test.ok(options.user === process.env.USER);

    test.done();
  },
  'production options': function(test) {
    test.expect(3);

    var options = new Optionall({'env': 'production'});

    test.ok(options.name === 'optionall');
    test.ok(options.aws.accessKeyId === 'production_fake');
    test.ok(options.user === process.env.USER);

    test.done();
  }
};
