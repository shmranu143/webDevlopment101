function addtwoNumber(a) {

    return function addSecondNumber(b) {
        return a+b;
    }
}
var add5ToAnyNumber = addtwoNumber(5);
add5ToAnyNumber(10);
console.log(add5ToAnyNumber(15));

function add(a,b){
    return a+b;

}
add();