
// chaining of methods
// selector-->method-->event-->multiple-event

// $("#btn1").click(function(){
//     $(".box").css("background","yellow").slideUp("slow").slideDown("slow")
// })

// perform multiple events as u wish

// $("#btn1").click(function(){
//     $(".box").css("background","yellow").slideUp("slow").animate(
//         {
//             fontSize:"30px",
//         }
//     ).slideDown("slow").fadeOut("fast").fadeIn("slow").css("border","2px solid red")
// })

// perform multiple events as u wish

// $("#btn1").click(function(){
//     $(".box").css("background","yellowGreen").animate(
//         {
//             width:"550px",
//             height:"550px",
//             fontSize:"35px",
//         },1000
//     ).css("border","2px solid red").fadeOut("slow").slideDown("slow").animate(
//         {
//             width:"300px",
//             height:"300px",
//             fontSize:"20px",
//         },1000   
//     )
// })

// Parent, grand-parent, child concept

//to target child
// $(document).ready(function(){
//     $("#child").css("background","yellow")
// })

//to target parent of a child
// $(document).ready(function(){
//     $("#child").parent().css("background","red")
// })


//to target parents of a child
// $(document).ready(function(){
//     $("#child").parents().css("background","orange")
// })

//to target one less than a selected-parent of a child
// $(document).ready(function(){
//     $("#child").parentsUntil("#great-grand-parent").css("background","grey")
// })

// to target parent of a child
// $(document).ready(function(){
//     $("#parent").parent().css("background","red")
// })
// to target parent of a child
// $(document).ready(function(){
//     $("#grand-parent").parent().css("background","orange")
// })


// Task # 01

// $("#btn1").click(function(){
//     $("#child").parent().animate({
//         width:"500px",
//         height:"500px",
//         fontSize:"30px"
//     }).css("background","orange").animate({
//         width:"100px",
//         height:"100px",
//         fontWeight:"bold",
//         fontSize:"20px"
//     }).slideUp("slow").slideDown(2000)
// })

// $("#btn2").click(function(){
//     $("#parent").parent().animate({
//         width:"500px",
//         height:"500px",
//         fontSize:"30px"
//     }).css("background","green").animate({
//         width:"200px",
//         height:"200px",
//         fontWeight:"bold",
//         fontSize:"20px"
//     }).slideUp("slow").slideDown(2000)
// })



// Task # 02
