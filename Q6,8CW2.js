try {
    const pi = 3.14
    console.log(pi);

    pi = 22.7
    console.log(pi);
     
} catch (error) {
    console.log(error.name+":"+error.message);
    
}

finally{
    console.log("executed");
    
}