function product(status){
    return new Promise ((resolve , reject) => {
        if (status) {
            resolve({
                name: "laptop",
                price: 500000,
                availability: "In Stock"
            })
        } else {
            reject("product not found...")
        }
    })
}

product(true).then((data) =>{
    console.log(data);  
})
.catch((error) =>{
    console.log(error);
    
})

