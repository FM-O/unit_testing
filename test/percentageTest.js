var assert = require('chai').assert;
var expect = require('chai').expect;
var Percentage = require('../lib/Percentage');

describe('percentage', function () {

    describe('#evolution', function () {

        it('should give an evolution', function () {
            assert.equal(Percentage.evolution(100, 200), 100);
            assert.equal(Percentage.evolution(100, 150), 50);
            assert.equal(Percentage.evolution(100, 50), -50);
        });

        it('should handle 0 evolution', function () {
            assert.equal(Percentage.evolution(0, 100), Infinity);
        });

        it('should round values', function () {
            assert.equal(Percentage.evolution(30, 100), 233.33);
        });
    });

    describe('#wait', function () {

        it('should exist', function () {
            expect(Percentage.wait).to.be.a('function');
        });

        it('should wait', function (done) {
            Percentage.wait(300, function (test) {
                expect(test).to.equal(18);
                done();
            });
        });
    });
});