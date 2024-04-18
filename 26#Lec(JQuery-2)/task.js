
// FadeIn() method, to use it we have to display=none

// $("#btn1").click(function(){
//     $("#a").fadeIn(2000);
//     $("#b").fadeIn(4000);
//     $("#c").fadeIn(3000);
// })

// FadeOut() method, to use it we have to remove display=none

// $("#btn1").click(function(){
//     $("#a").fadeOut(2000);
//     $("#b").fadeOut(2000);
//     $("#c").fadeOut(2000);
// })


// FadeToggle() method, switch between DISPLAY:NONE & :display

// $("#btn1").click(function(){
//     $("#a").fadeToggle(2000);
//     $("#b").fadeToggle(3000);
//     $("#c").fadeToggle(5000);
// })

// FadeToggle() method, use it to display a block of code 

// $("#btn").click(function(){
//     $("#para").fadeToggle(2000);
// })


// use Slide-method in place of FADE-Method

// $("#btn1").click(function(){
//     $("#a").slideToggle(2000);
//     $("#b").slideToggle(3000);
//     $("#c").slideToggle(5000);
// })


// use Animate-method to animate boxes
// to  use this position must be relative or absolute


// $("#btn1").click(function(){
//     $("#a").animate(
//         {left:"200px"},2000
//     );
// })

// for all boxes

// $("#btn1").click(function(){
//     $("#a").animate(
//         {left:"200px"},2000
//     );
//     $("#b").animate(
//         {left:"300px"},2000
        
//     );
//     $("#c").animate(
//         {left:"400px"},2000
//     );
// })


// in all direction

// to move right
$("#btn1").click(function(){
    $("#a").animate(
        {
            left:"200px",
        },2000
    );
    $("#b").animate(
        {left:"200px",},2000
        
    );
    $("#c").animate(
        {left:"200px"},2000
    );
})


// to move bottom
$("#btn2").click(function(){
    $("#a").animate(
        {
            top:"200px",
        },2000
    );
    $("#b").animate(
        {top:"200px",},2000
        
    );
    $("#c").animate(
        {top:"200px"},2000
    );
})

// to move left
$("#btn3").click(function(){
    $("#a").animate(
        {
            right:"200px",
        },2000
    );
    $("#b").animate(
        {right:"200px",},2000
        
    );
    $("#c").animate(
        {right:"200px"},2000
    );
})

// to move up
$("#btn4").click(function(){
    $("#a").animate(
        {
            bottom:"400px",
        },2000
    );
    $("#b").animate(
        {bottom:"400px",},2000
        
    );
    $("#c").animate(
        {bottom:"400px"},2000
    );
})




// $("#btn1").click(function(){
//     $("#a").animate(
//         {left:"200px"},
//         {opacity:"0.4"},2000
//     );
//     $("#b").animate(
//         {left:"300px"},
//         {opacity:"0.4"},3000
        
//     );
//     $("#c").animate(
//         {left:"400px"},
//         {opacity:"0.4"},4000
//     );
// })

