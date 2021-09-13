var x = prompt("Enter a Value","0");
var y = prompt("Enter a 2nd Value ","0");
var operation= prompt("+ , - , *, /");

var num1= parseInt(x);
var num2= parseInt(y);

var result=0;


if(operation=="+")
{
  var result= num1 + num2;
}
else if(operation=="-")
{
  var result= num1 - num2;
}
else if(operation=="*")
{
  var result= num1 * num2;
}
else if(operation=="/")
{
  var result= num1 / num2;
}




alert(result);


