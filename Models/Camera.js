const Producto = require('./Producto')
const Feature = require('./Feature')

/*const productoModel = new Producto('cesar', 'Garzon');
console.log(productoModel.nombreyManufacturer()); */

class Camera extends Producto {
  constructor (Name, Manufacturer,SKU,MaxIso, Type,CropFactor,feateure) {
    super(Name, Manufacturer,SKU)
    this.MaxIso = MaxIso;
    this.Type = Type;
    this.CropFactor = CropFactor;
    this.Feature = new Feature(feateure.Name,feateure.description)
  }

  get area() {
    return this.getNombre();
  }
  // Método
  getNombre () {
    return "El tipo es "+this.Type;
  }


}


module.exports = Camera

