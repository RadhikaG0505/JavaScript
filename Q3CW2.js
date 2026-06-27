function payment(status){
    return new Promise ((resolve , reject) => {
        if (status) {
            resolve("Payment Successfull....")
        } else {
            reject("error occured...")
        }
    })
}

payment(true).then((r)=>{
    console.log(r);
    
})
.catch((err)=>{
    console.log(err);
    
})