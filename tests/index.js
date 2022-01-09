/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var {expect} = require('chai');
let query = require('./../index.js');



describe('query', function () {
    it('Return string input as output', function(){
        expect(query('foo')).to.eq('foo');
    });

    it('Return number input as output', function(){
        expect(query(1)).to.eq(1);
        expect(query(20)).to.eq(20);
        expect(query(300)).to.eq(300);
        expect(query(4000)).to.eq(4000);
    });

    it('Generate foo=bar query from {foo: bar}', function(){
        expect(query({foo: "bar"})).to.eq('foo=bar');
    });

    it('Generate name=bar&age=20 query from {name: bar, age: 20}', function(){
        expect(query({
            name: "bar",
            age: 20
        })).to.eq('name=bar&age=20');
    });

    it("Generate limit=10&tags[0]=foo&tags[1]=bar query from {limit: 10, tags: ['foo', 'bar']}", function(){
        expect(query({limit: 10, tags: ['foo', 'bar']})).to.eq('limit=10&tags[0]=foo&tags[1]=bar');
    });
});
