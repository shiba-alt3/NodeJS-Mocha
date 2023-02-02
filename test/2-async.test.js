const expect = require('chai').expect;
const async = require('../async');

describe('asyncOperations', () => {

    describe('myltiplyAsync', () => {

        it('async multiplies two numbers', (done) => {
            async.multiplyAsync(5, 3,
                function(isValid){
                expect(isValid).equal(15);
                done();
            });
        });

        it('async multiplies two numbers', (done) => {
            async.multiplyAsync(5, -3,
                function(isValid){
                expect(isValid).equal(-15);
                done();
            });
        });
    });

    describe('isValidUserIdAsync', () => {

        it('async checks is user id is valid', (done) => {
            async.isValidUserIdAsync(['user1', 'user2'], 'user1',
            function(isValid){
                expect(isValid).equal(true);
                done();
            });
        });

        it('async checks is user id is invalid', (done) => {
            async.isValidUserIdAsync(['user1', 'user2'], 'user9',
            function(isValid){
                expect(isValid).equal(false);
                done();
            });
        });
    });
});


