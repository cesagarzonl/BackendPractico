
//stubs
const test = require('ava')
//se divide en 3 pasos 


//setup
const Camera = require('../producto/Camera')
const CameraReviw = require('../Review/CameraReview')
//exec
test('Camera',t =>{
    t.truthy(Camera,"Existe el modelo")
    //t.pass()
})
test('Review',t =>{
    t.truthy(CameraReviw,"Existe el modelo")
    //t.pass()
})


//assert
let cameramoc 
test.serial('Setup Camera',t =>{
    let feture = {Name:'feature',description:'Descripcion'}
    const Cameramodel = new Camera('camera1','fabricante','2','10','normal',5,feture)

    t.truthy(Cameramodel,'Se crea producto correctamente.')
    t.truthy(Cameramodel.Type,'No tiene el tipo.')
    t.deepEqual(Cameramodel.getNombre(),'El tipo es normal','no Retorna Tipo')
    t.deepEqual(Cameramodel.nombreyManufacturer(),'camera1 fabricante','Funcion suma texto')
    cameramoc = Cameramodel
})

test.serial('Setup Review',t =>{

    let cameraReview = new CameraReviw('Titulo', 'Contenedor','Autor',cameramoc)

    t.truthy(cameraReview,'Se crea previeu correctamente.')
    t.truthy(cameraReview.Contenedor,'No tiene el Contenedor.')

})


module.exports = {test}