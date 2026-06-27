function payment(status){
    return new Promise ((resolve , reject) => {
        if (status) {
            resolve("Payment Successfull....")
        } else {
            reject("error occured...")
        }
    })
}

async function test(){
    try {
        const data = await payment(true)
        if (data) {
            console.log(data);
            
        }
    } catch (error) {
        console.log(error);
        
    }
}
test()