const chai = require('chai')    
const service = require("../services");

expect = chai.expect,
    should = chai.should();

describe('#getItems', () => {
  it('returns items', async () => {
    const result = await service.getItems();    
	result.length.should.not.equal(0);	
  });
});



/*

var assert = require('assert');
const service = require("../services");

describe('#getItems', () => {
  it('returns items', async () => {
    const result = await service.getItems();    
	assert.notEqual(result.length, -1);	
  });
});


let items = service.getItems();
	
items.then(function(res){
	console.log(res);
})

	
(async ()=>{
    let items = await service.getItems();
	console.log(items);
})();

*/