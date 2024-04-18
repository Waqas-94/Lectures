// FUNCTIONS 

// A block of code or program written in block-structure. 

                        // Sum-Function

// function sum(value1,value2)
// {
//     let result = value1+value2;
//     document.write(result);
// }

// let a = Number(prompt("enter 1st num"));
// let b = Number(prompt("enter 2nd num"));
// sum(a,b);

                    // Leap YEAR checking

// let yr = Number(prompt("enter a year"));

// leapyear(yr);

// function leapyear(value)
// {
//     if(value%4==0 && value%100!=0)
//     {
//         document.write("Entered year is Leap Year " + value);
//     }
//     else
//     {
//         document.write("Entered year is not Leap Year" + value);
//     }
//     }
    

                // Reversing a Number
                
// let num = Number(prompt("enter a number"));


// function reverse(num)
// {
//     num= num+"";
//     return num.split("").reverse().join("");
// }
// document.write(reverse(num))


                    // Reversing three Number

let a = Number(prompt("enter a number"));
let b = Number(prompt("enter 2nd number"));
let c = Number(prompt("enter 3rd number"));

let rev = [a,b,c];    // make an array and then reverse it

document.write(rev.reverse(""))


