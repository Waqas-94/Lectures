let name = prompt("Enter your Name");
let job_pos = prompt("Enter your Designation");
let salary = Number (prompt("Enter your Salary"));

if(Designation="Manager")
{
    if(salary>=40000 && salary<=60000)
    {   let inc = parseInt (salary*1.15);

        document.write(job_pos +" "+ name + " your next increamented salary will be = " + inc);
    }
    else
    {
        alert("you enter wrong information");
    }
}


else if(Designation="Worker")
{
    if(salary>=30000 && salary<=40000)
    {   
        let inc = parseInt (salary*1.05);
        document.write(job_pos +" "+ name + " your next increamented salary will be = " + inc);
    }
    else
    {
        alert("you enter wrong information");
    }

}
else
{
    alert("you enter wrong information");
}