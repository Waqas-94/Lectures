// TASK # 01

let d = prompt("Enter number of day of month");
let m = prompt("Enter number of month of an year");
let y = prompt("Enter year");

let e = new Date(y + "-" + m + "-" + d);

// document.write(e);

let day = e.getDay();

// document.write(day);

if (y % 100 != 0 && y % 4 == 0) 
{
  if (m == 2 && d > 29) 
  {
    document.write("Invalid day, February has only 29 days in a leap year.");
  } 
  else
  {
    switch (day) {
      case 0:
        document.write("its leap year and its Sunday");
        break;
      case 1:
        document.write("its leap year and its Monday");
        break;
      case 2:
        document.write("its leap year and its Tuesday");
        break;
      case 3:
        document.write("its leap year and its Wednesday");
        break;
      case 4:
        document.write("its leap year and its Thursday");
        break;
      case 5:
        document.write("its leap year and its Friday");
        break;
      case 6:
        document.write("its leap year and its Saturday");
        break;
      case 7:
        document.write("its leap year and its Sunday");
        break;
      default:
        document.write("you entered invalid date");
        break;
    }
  }
} 
else {
  if (m == 2 && d > 28) 
  {
    document.write("Invalid day, February has only 28 days in a normal year.");
  } 
  else 
  {
    switch (day) {
      case 0:
        document.write("its Sunday");
        break;
      case 1:
        document.write("its Monday");
        break;
      case 2:
        document.write("its Tuesday");
        break;
      case 3:
        document.write("its Wednesday");
        break;
      case 4:
        document.write("its Thursday");
        break;
      case 5:
        document.write("its Friday");
        break;
      case 6:
        document.write("its Saturday");
        break;
      case 7:
        document.write("its Sunday");
        break;
      default:
        document.write("you entered invalid date");
        break;
    }
  }
}
