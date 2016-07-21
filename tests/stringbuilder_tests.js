var expect = require('chai').expect,
    should = require('chai').should(),
    sb = null;

describe("StringBuilder Test Cases",function(){


    before(function(done){
        sb = require('../dist/stringbuilder')("");
        done();
    });


    describe("#Initial length", function(){
        it('It should return 0 for sb.length', function(){

            sb.length.should.equal(0);
        });

    });

    describe("#append", function(){
        it('It should return 2 for sb.length after appends', function(){

            sb.append("Hello,").append(' world!');
            sb.length.should.equal(2);
        });

    });

    describe("#toString", function(){
        it("It should return 'Hello, world!' for sb.toString()", function(){

            sb.toString().should.equal("Hello, world!");
        });

    });


});