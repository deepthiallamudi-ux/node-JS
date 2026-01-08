import chalk from "chalk";
import isOdd from "is-odd";

 
console.log(isOdd('1')); //=> true
console.log(isOdd('3')); //=> true
 
console.log(isOdd(0)); //=> false
console.log(isOdd(2)); //=> false
console.log(chalk.blue("hello world"));
console.log(chalk.bgRed("hello world"));