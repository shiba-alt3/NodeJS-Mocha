const expect = require('chai').expect;
const basic = require('../basic');

describe('basicOperations', () => {

    describe('multiply', () => {

        it('returns result of multiplying two numbers', () => {
            expect(basic.multiply(5, 6)).equal(30);
        });

        it('returns result of multiplying two numbers', () => {
            expect(basic.multiply(-5, 6)).equal(-30);
        });
    });

    describe('allUpper', () => {

        it('turns all elements in array to upper case', () => {
            expect(basic.allUpper(['a', 'ab'])).eql(['A', 'AB']);
        });

        it('turns all elements in array to upper case', () => {
            expect(basic.allUpper(['A', 'AB'])).eql(['A', 'AB']);
        });
    });

    describe('basic mocha string test', () => {
        
        it('returns the length of the string', () => {
            expect("Mocha".length).equal(5);
        });
    });
});