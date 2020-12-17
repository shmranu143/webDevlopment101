// // lets create macD function 

// function takeOrder(a){
//     return a*10;
// }
// function isPaid(total){
//     if(total>0){
//         return true;
//     }
//     return false;
// }

// function canDrive (orderAmmount , ammountPaid){
//     if(orderAmmount == ammountPaid){
//         return true;

//     }
//     return "pay your bills you filthy human!"
// }

// function greetingMessage(){
//     console.log("welcome and happy today");
// }

// greetingMessage();
// console.log(takeOrder(4));
// console.log(isPaid(takeOrder(4)));
// console.log(canDrive(40,40));

// scope
{
function canDriveCar(age){
    if(age>=18){
        var str="wow you can drive";
        console.log(age+"is good!"+str);
    }else{
        str="yay";
        // var str -> block scope
        // a,b -> global variable

        console.log(age+"is good!"+str);
    }
    console.log("well i did not expect that"+str);//undifined or what
}

// canDriveCar(18);
// canDriveCar(12);

}


// value and type of


{
    var a="true";
    var b=1;
    var c=true;
    var d=null;
    var e=undefined;

    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d));
    console.log(typeof(e));

    console.log(d==e);
    console.log(d===e);
    console.log(d==null);
    console.log(e==undefined);

    var obj1={
        attr1:1,
        attr2:"two",
        attr3:false
    };

    obj1["anotherAttribute"]="yay";
    var array=[1,"two",true,obj1];
    console.log(array);

}