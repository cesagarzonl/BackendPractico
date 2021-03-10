
//stubs
const test = require('ava')
//se divide en 3 pasos 


//setup
const Producto = require('../producto/Producto')
//exec
test('Producto',t =>{
    t.truthy(Producto,"Existe el modelo")
    //t.pass()
})
//assert

test.serial('Setup',t =>{
    const productoModel = new Producto('Name', 'Manufacturer','SKU','GetContent');
    t.truthy(productoModel,'Se crea producto correctamente')
    t.deepEqual(productoModel.nombreyManufacturer(),'Name Manufacturer','Funcion suma texto')

})

module.exports = {test}