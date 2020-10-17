const chai = require('chai');

const expect = chai.expect;

let a = 1, b = 1;

//expect(a).to.be.equals(b, "espera que 'a' sea igual 'b' ");

//
//expect(x).to.be.an('object');
//expect(x).to.be.equals(y, "expect to have the same content");
//expect(x).to.be.equals(y, 'x and y not equal')


let numbers = [1,2,3,0];
expect(numbers).to.be.an('array').that.includes(3);
(numbers).should.be.an('array').that.includes(3);


