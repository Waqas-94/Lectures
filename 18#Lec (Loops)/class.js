// Loops   (While & For)


// for(let i=0;i<10;i++)
// {
//     // document.getElementById("a").innerHTML=i;
//     document.write(i);
//     document.write("<br>");
// }


// EVEN Numbers

// for(let i=0;i<10;i++)
// {
//     document.write(i);
//     document.write("<br>");
//     i=i+1;
// }


// ODD Numbers

// for(let i=1;i<10;i++)
// {
//     document.write(i);
//     document.write("<br>");
//     i=i+1;
// }


// Table of any input using FOR-LOOP

// let a = prompt("enter a number to print table of that number")

// document.write("Table of entered number = ",a);
// document.write("<br>");  //  to add line break

// for(let i=1;i<=10;i++)
// {
    //     document.write(a," ", "x ", i,"   =", a*i,"<br>");
    // }
    
    // Table of any input using WHILE-LOOP
    
    // let a = prompt("enter a number to print table of that number");
    // let b = prompt("enter a range of table");
    
    // document.write("Table of entered number = ",a);
    // document.write("<br>");  //  to add line break
    // let i=1;
    // while(i<=b)
    // {
        //     document.write(a," ", "x ", i,"   =", a*i,"<br>");
        //     i++;
        // }
        
        
// Table of any input using DO-WHILE-LOOP
        
        
    let a = prompt("enter a number to print table of that number");
    let b = prompt("enter a range of table");
        
    document.write("Table of entered number = ",a);
    document.write("<br>");  //  to add line break
    let i=b;    
    
    do
    {
        document.write(a," ", "x ", i,"   =", a*i,"<br>");
        i++;
    }while(i<=b)