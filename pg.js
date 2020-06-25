const service = require("./services");

/*
let items = service.getItems();
	
items.then(function(res){
	console.log(res);
})
*/	
	
(async ()=>{
    let items = await service.getItems();
	console.log(items);
})();