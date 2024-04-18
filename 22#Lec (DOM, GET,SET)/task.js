function change()
{
    document.getElementById("test").setAttribute("style","background-color: orange;")
    document.getElementById("heading").setAttribute( "style", "font-size:20px; color:green" );
    document.getElementById('heading').innerHTML="Hello Javascript!"; 
    document.getElementsByTagName("p")[0].innerHTML="my first JS interaction";
    document.getElementsByTagName("p")[0].setAttribute("style","background-color: red;display:inline;color:blue;font-size:30px ")

}

function previous()
{
    document.getElementById("test").setAttribute("style","background-color: red;")
    document.getElementById("heading").setAttribute( "style", "font-size:30px;" );
    document.getElementById('heading').innerHTML="Pakistan"; 
    document.getElementsByTagName("p")[0].innerHTML="I LOVE PAKISTAN";
    document.getElementsByTagName("p")[0].setAttribute("style","background-color: red;color:black;font-size:16px ")
 

}


