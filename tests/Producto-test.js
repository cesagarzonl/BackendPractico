
//stubs
const test = require('ava')
//se divide en 3 pasos 
const Producto = require('../producto/Producto')




//setup
/*test.beforeEach(async () => {
    

})*/
//exec

//assert
test('Producto',t =>{
    t.truthy(Producto,"Existe el modelo")
    //t.pass()
})
