//DOM Stands Document Object Model

// let a;

// TARGETS (ID,CLASS,TAG)

// a=document.body;

// a=document.head;

// a = document.getElementById("waqas");

// a=document.getElementsByClassName("waqas")[0];   //to get 1st class

// a=document.getElementsByClassName("waqas")[1];   // to get second class

// a = document.getElementsByTagName("li")[8]     // to get 9th list-element from all

// a = document.getElementsByTagName("ol")[1]     // to get 2nd order-list from all

// console.log(a);


// GET (innerHTML, innertext,attributes, attribute-not)

// let a = document.getElementById("para");
// let b = document.getElementById("para").innerText;
// let b = document.getElementById("para").innerHTML;
// console.log(a);
// console.log(b);

// let a = document.getElementsByClassName("para")[0]; // to get by class name, you must enter its 1st index
// let b = document.getElementById("para").innerText;
// console.log(a);
// console.log(b);


// let a = document.getElementById("test").getAttribute("style");
// let a = document.getElementById("test").attributes[0];
// let a = document.getElementById("test").attributes[1];
// let a = document.getElementById("test").attributes[0].name;
// let a = document.getElementById("test").attributes[0].value;

// console.log(a);


            // SET (innerHTML, innertext,attributes, attribute-not)

let a;
//  a = document.getElementById("test").innerHTML = "<h1>WAQAS</h1>";
a = document.getElementById("test").setAttribute("style","background-color: yellow; color:green");

console.log(a)
