// const os = require("os");
// const greeting = require("./greeting");
// const User = require("./user.js");
 
// // получим имя текущего пользователя
// let userName = os.userInfo().username;
// let evaGreen = new User("Eva Green", 36); 
 
// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));
// evaGreen.sayHi();

// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`); //Hello Alice
 
// var greeting2 = require("./greeting.js");
// greeting2.name= "Bob";
 
// console.log(`Hello ${greeting2.name}`); //Hello Bob
// // greeting1.name тоже изменилось
// console.log(`Hello ${greeting1.name}`); //Hello Bob


// const welcome = require("./welcome");
 
// welcome.getMorningMessage();
// welcome.getEveningMessage();


// const greeting = require("./greeting");
 
// global.name = "Eva";
 
// global.console.log(date);
// console.log(greeting.getMessage());



let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
 
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);