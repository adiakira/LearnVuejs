// Ming's first js file
var name="Ming"
var age=18
var flag=true

function sum(num1,num2) {
  return num1+num2
}
if (flag){
  console.log(sum(20, 30));
}

// 1st export way
export {
  flag,sum
}

// 2nd export way
export var num3 = 1000;
export var height = 1.87;

// 3rd export
export function mul(num1,num2) {
  return num1*num2
}
// 4th export
export class Person{
  run(){
    console.log("Running now");
  }
}
// 5th export, default export
const address="Beijing";
export default address; // Only has one default export