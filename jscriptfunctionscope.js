// function subnum(num1,num2) {
//     console.log(num1-num2);
// }
//
// function hello (name="dave") {
//     console.log("hello " + name);
// }

// function formal(name="SAM", title='Sir') {
//     console.log(title + " "+ name);
// }

// function formal(name="Sam", title='sir') {
//       return title+" "+name;
// }
//
// function timesFive(numInput) {
//       var result = numInput*5;
//       return result
// }

function timesFive(numInput) {
//LOCAL SCOPE
      var result= numInput*5;
      return result
}

// GLOBAL SCOPE
var v = " Global v"

var stuff = "Global stuff"

function fun(stuff) {
      console.log(v);

      stuff = "Reassign stuff inside function"
      console.log(stuff);
}

fun();

console.log(stuff);
