// Ming's second js file
import {flag} from "./aaa.js"
// 1st import
if (flag){ // Modules are mutual independent
  // but what if we want to use other module's data?? USE export
  // In aaa.js, export properties and functions,
  // in mmm.js import properties and functions from a specific js file(aaa.js)
  console.log("Ming's second js file");
}
// 2nd import
import {num3,height} from "./aaa.js";
console.log(num3 +' <- num3, height->' + height);

// 3rd import, func
import {mul} from "./aaa.js";
console.log("mul", mul(20, 30));

// 4th import, class
import {Person} from "./aaa.js";
const pObj = new Person();
pObj.run();

// 5th import
import addr from "./aaa.js" // aaa.js only has one default export
console.log(addr);

// Or, just export all the properties, data, func, class, etc.
// Or, when importing, import * from "./aaa.js"