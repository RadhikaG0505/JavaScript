class Product {
    name ;
    product ;
    price ;

    constructor (name , product , price){
        this.name = name
        this.product = product
        this.price = price
    }
    
    displayDietails(){
        console.log(this.name);
         console.log(this.product);
          console.log(this.price);
        
        }
}
const p = new Product("sony","TV",50000);
p.displayDietails()