let a = 0;

// write a function to move a container from left to right

// setInterval(anim,1000)

// function anim()
// {
//     a=a+10;
//     let target =  document.querySelector("#test");
//     target.style.backgroundColor = "#a0" + a +"f0";
//     target.style.marginLeft = a+"px";
// }


// to clear the set-Interval 
// first put set-interval into  variable & then clear that interval

let timer = setInterval(anim,1000)

function anim()
{
    a=a+10;
    if(a==200)
    {
        clearInterval(timer)
    }
    else{
    let target =  document.querySelector("#test");
    target.style.backgroundColor = "#a0" + a +"f0";
    target.style.marginLeft = a+"px";
    }
}



// make a program that increase width with every second

// setInterval(loading,1000)

// function loading()
// {
//     a = a+10;
//     let target = document.querySelector("#test1");
//     target.style.width = a + "px";
// }




// make a program that counts a value and display timer as clock

// let m = 0;
// let s = 0;

// let time = setInterval(clock,100);

// function clock()
// {
//     if(s<60)
//     {
//     let target = document.querySelector("p");
//     target.innerHTML = m+m +":"+s
//     s=s+1;
//     }
//     else
//     {   
//         if(m>2)
//         {
//             clearInterval(time);
//         }
//         else
//         {
//             s=0;
//             m=m+1;
//         }
//     }
// }





// function focusbro()
// {
//     document.querySelector("#a").style.background = "yellow";
// }
// function focussbro()
// {
//     document.querySelector("#b").style.background = "yellow";
// }

function focusbro(waqas)
{
    waqas.style.background = "yellow";
}

function blurbro(a)
{
    a.style.background = "red";
}

function inputbro(waqas)
{
    let x = waqas.value
    document.querySelector("#test").innerHTML = x
}