//var x,y,z;
//x=5;
//y=10;
//z=x+y;
//console.log(z);

var x = parseInt(prompt('enter the first number:'));
var y = parseInt(prompt('enter the second number:'));
var choice = parseInt(prompt('enter the choice:'));
var z;
//var user_input=1
switch(choice){
    case 1:
        z=x+y;
        //document.write(+z);
        console.log(z);
        break;

    case 2:
        z=x-y;
        //document.write(+z);
        console.log(z);
        break;
    case 3:
        z=x*y;
        //document.write(+z);
        console.log(z);
}
