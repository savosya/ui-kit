'use strict';

const packageTemplate = require('..');
const assert = require('assert').strict;

assert.strictEqual(packageTemplate(), 'Hello from index');
console.info('index tests passed');
