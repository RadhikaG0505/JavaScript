class Emp {
    name ;
    id ;
    salary ;

    constructor (name, id, salary){
        this.name = name
        this.id = id
        this.salary = salary
    }

    
    displayInfo(){
        console.log(this.name);
         console.log(this.id);
          console.log(this.salary);
        
    }

}
const e = new Emp("tom",1,200000);
e.displayInfo()