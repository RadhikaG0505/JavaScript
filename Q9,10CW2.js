class InvalidAge extends Error{
    constructor (msg){
    super(msg)
    this.name = "InvalidAge"
}}
function validate(age){
    if(age<20){
        try {
            throw new InvalidAge("Age is not valid...")
        } catch (error) {
            console.log(error.name +":"+ error.message);
            
        }
    }
    else{
        console.log("age is valid");
        
    }
}
validate(19);
