//Rest Parameter

const c = [10.30,45,12]
function findMax(){
    return Math.max(...c)
}
console.log(findMax());

//Default Parameter

function add(a,b=10){
    console.log(a+b);
}
add(10)