const {add,mul} = require("./js/mathUtils.js")

console.log(add(10, 15));
console.log(mul(10, 15));

// COMMAND webpack ./src/main.js ./dist/bundle.js
// Auto package, so we only need to cite one bundle.js file
// but every time we change the js files, re-package, otherwise bundle.js
// won't be updated.

// How to make everything more convenient? let computer package main.js
// quicker instead of typing command line every time I change js files.
// use npm init to initialize a package.json file as configuration file

// In package json, define a ** ( npm run **)
// local webpack might be different from global webpack

// When running the commands in package.json, system will look for command
// inside node_modules(local dependencies) first, if not found,
// go to global environment to get the command