/**
 * Created by julienpieropan on 26/02/2017.
 */

const expect = require('chai').expect;
const Lib = require('../apps/app-simple/lib.js');

describe('Lib', () => {
    "use strict";
    describe('Concat', () => {
        it('should concat two strings', () => {
            expect(Lib.concat('test1', 'test2')).to.be.equal('test1test2');
        });
    });
});