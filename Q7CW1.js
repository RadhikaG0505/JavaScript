const employee = [
    {name : "tom", salary : 4500},
    {name : "jerry", salary : 1200},
    {name : "james", salary : 1000},
    {name : "nancy", salary : 2000},
];

const filtersalary = employee.filter((emp)=>{
    return emp.salary>1500
})

console.log(filtersalary);
