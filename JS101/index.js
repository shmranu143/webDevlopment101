// console.log("javascript in deff file");



var a=42;
var b="i m a string";
var c=true;
console.log(a+b);
console.log(a+c);
console.log(b+c);


// maths operator


var a=2;
var b=3;
var c=4;
var d=5;
console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a%b);

console.log(a++);
console.log(a--);

var a=42;
var anotherA = "42";
var justtrue="true"
var deeptrue=true;

// equality operator
// 1- shallow equality
console.log(a==anotherA);
console.log(justtrue==deeptrue);
// 2- deep equality
console.log(a===anotherA);
console.log(justtrue===deeptrue);




// maths equality

a=3;
b=2;
c=5;
d=7;

console.log(a<b);
console.log(c<=d);

//logical operations

console.log(a<b && c<d);


//values 


// coercion
var e=true;
var f=false;
console.log(a+e);//implicit coercion
// a=3 and e= true 
console.log(a+"some string");
//explicit 
console.log(a+Number(e));
console.log(String(a)+"some string");

//

var someVar=2;
console.log(someVar);
someVar="someVar";
console.log(someVar);

someVar=true;
console.log(someVar);

//constant in js

var COOL_STUDENTS=100;
if(COOL_STUDENTS==100){
    console.log("you are cool");
}