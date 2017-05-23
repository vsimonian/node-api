const nt = require('./node-api');
const expect = require('chai').expect;

describe("node-api", function() {
    describe("function returns", function() {
        it("can return objects", function() {
            expect(nt.returns_objects()).to.deep.equal({'foo': 'hello', bar: 42});
        });
        it("can return strings", function() {
            expect(nt.returns_strings()).to.equal("returned_string");
        });
        it("can return numbers", function() {
            expect(nt.returns_numbers()).to.equal(42);
        });
        it("can return booleans", function() {
            expect(nt.returns_booleans()).to.equal(true);
        });
        it("can return arrays", function() {
            expect(nt.returns_arrays()).to.deep.equal(["one", "two", "three"]);
        });
    });
    describe("function arguments", function() {
        it("can receive objects", function() {
            const object = {'foo': 'hello', bar: 42};
            expect(nt.receives_objects(object)).to.deep.equal(object);
        });
        it("can receive strings", function() {
            const str = "hello world!";
            expect(nt.receives_strings(str)).to.deep.equal(str);
        });
        it("can receive booleans", function() {
            const b = true;
            expect(nt.receives_booleans(b)).to.deep.equal(b);
        });
    });
});
