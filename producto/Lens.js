const Producto = require('./Producto')
const Feature = require('./Feature')

/*const productoModel = new Producto('cesar', 'Garzon');
console.log(productoModel.nombreyManufacturer()); */

class Lens extends Producto {
  constructor (Name, Manufacturer,SKU,MaxIso, Type,CropFactor,feateure) {
    super(Name, Manufacturer,SKU)
    this.MaxIso = MaxIso;
    this.Type = Type;
    this.CropFactor = CropFactor;
    this.Feature = new Lens(feateure.Name,feateure.description)
  }
}


module.exports = Lens
