

// $("document").ready(function(){
// $("p").css("border","2px solid black")
// $("p").css("background-color","blue")

// })


// $("document").ready(function(){
// $("p:last").css("border","2px solid red")
// $("p:last").css("background-color","green")

// })


// Multiple Selector

// $("document").ready(function(){
// $("p,h1,ul").css("border","2px solid red")
// })


// EQ-Method  to select any 

// $("document").ready(function(){
// $("ul li:eq(2)").css("border","2px solid red")
// })


// Even/ODD-Method  to select any even or odd

// $("document").ready(function(){
// $("ul li:even").css("border","2px solid red")
// })


//to select within div or li-item in ul only

// $("document").ready(function(){
// $("ul li").css("border","2px solid red")
// })


//to select less than from a value

// $("document").ready(function(){
// $("ul li:lt(2)").css("border","2px solid red")
// })


//to select Greater than from a value

// $("document").ready(function(){
// $("ul li:gt(1)").css("border","2px solid red")
// })


// how to add a Psudeo-Class by JQuery

// $("#btn1").click(function(){
//     $(".box").addClass("first")
// })


// how to remove a Psudeo-Class by JQuery

// $("#btn2").click(function(){
//     $(".box").removeClass("first")
// })

// how to toggle a Psudeo-Class by JQuery

// $("#btn3").click(function(){
//     $(".box").toggleClass("first")
// })


// how to toggle multiple a Psudeo-Class by JQuery

// $("#btn3").click(function(){
//     $(".box").toggleClass("first second")
// })

// how to use build-in HIDE, SHOW & TOGGLE function


// $("#show1").click(function(){
//     $(".box").show()

// })

// $("#hide1").click(function(){
//     $(".box").hide()

// })

// $("#toggle").click(function(){
//     $(".box").toggle()
// })

// how to use build-in HIDE, SHOW & TOGGLE method with parameters(timer,function)


$("#show1").click(function(){
    $(".box").show(1000)    //timer is to be set in milisecond

})

$("#hide1").click(function(){
    $(".box").hide(3000)  //timer is to be set in milisecond

})

$("#toggle").click(function(){
    $(".box").toggle(5000,function(){
        console.log("your div is toggled")  // to show in console
    })
})