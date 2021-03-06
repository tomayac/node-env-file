process.env.NODE_ENV = 'test';

module.exports.chai = require('chai');
module.exports.chai.Assertion.includeStack = true;

module.exports.assert = module.exports.chai.assert;
module.exports.expect = module.exports.chai.expect;

module.exports.debug = console.log;
