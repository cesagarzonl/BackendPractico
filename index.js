const Camera = require('./producto/Camera')
const Lens = require('./producto/Lens')
const CameraReviw = require('./Review/CameraReview')

let feture = {Name:'feature',description:'Descripcion'}

const Cameramodel = new Camera('camera1','fabricante','2','10','normal',5,feture)


let cameraReview = new CameraReviw('Titulo', 'Contenedor','Autor',Cameramodel)
console.log('cameraReview',cameraReview)
if(Cameramodel.Type){
    console.log('yes')
}else{
    console.log('no')
}