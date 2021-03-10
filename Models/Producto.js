class Producto {
    constructor (Name, Manufacturer,SKU,GetContent) {
      this.Name = Name;
      this.Manufacturer = Manufacturer;
      this.SKU = SKU;
      this.GetContent = GetContent;
    }
    // Getter
    get area() {
       return this.nombreyManufacturer();
     }
    // Método
    nombreyManufacturer () {
      return this.Name +" "+ this.Manufacturer;
    }
  }

module.exports = Producto
  
 /* const cuadrado = new Producto('cesar', 'Garzon');
  
  console.log(cuadrado.nombreyManufacturer()); // */