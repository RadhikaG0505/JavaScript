const order = [
    {product : "soap", price : 45},
   {product : "perfume", price : 200},
   {product : "fan", price : 500},
];

const totaleSales = order.reduce((tot,order)=>
    tot= tot + order.price,0
)
console.log(totaleSales);
