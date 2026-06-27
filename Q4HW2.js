function order(status){
    return new Promise ((resolve , reject) => {
        if (status) {
            resolve([
            {
                orderId:1,
                product:"laptop",
                price:80000
            },
        {
            orderId: 2,
            product: "tv",
            price:40000
        }])
        } else {
            reject("product not found...")
        }
    })
}
async function showHistory(){
    try {
        const history = await order(true);
            console.log(history);    
    } catch (error) {
        console.log(error);    
    }
}
showHistory();


