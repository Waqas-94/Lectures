
// OBJECTS

let country={
    name:"waqas" ,
    f_name:"Ashraf",
    age:2,
    education:"graduation",
    students:["a","b","c"],
    salary : ()=>
    {
       return 32000;  
    },
    month: ["jan","feb","march","april",
            "may","june","jul","aug","sep",
            "oct","nov","dec"],
    mon:function(value){
        return  country.month[value];   // i call the above array using function
    }
    

}
// console.log(country.name,country.age,country.salary())

// console.log(country.month[11])

console.log(country.mon(1))
