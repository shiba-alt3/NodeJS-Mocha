const expect = require('chai').expect;
const async = require('../async');

describe('mochaHooks', () => {

    let testsCount = 1;
    beforeEach('test count', () => {
        console.log(`test ${testsCount}:`);
        testsCount++;
    });

    describe('tests', () => {

        it('test to demonstrate how this hook work', () => {
            // ...
        });

        it('test to demonstrate how this hook work', () => {
            // ...
        });

        it('test to demonstrate how this hook work', () => {
            // ...
        });
    });
});
