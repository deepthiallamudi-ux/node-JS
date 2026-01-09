import chalk from "chalk";
import isOdd from "is-odd";

 
console.log(isOdd('1')); //=> true
console.log(isOdd('3')); //=> true
 
console.log(isOdd(0)); //=> false
console.log(isOdd(2)); //=> false
console.log(chalk.blue("hello world"));
console.log(chalk.bgRed("hello world"));


// ^ carrot sign means it will install the latest minor and patch version of the package but will not update to a new major version. for example if we have "is-odd": "^3.0.1" in our package.json file and the latest version of is-odd is 4.0.0 then when we run npm install it will install version 3.x.x but not 4.0.0
// ~ tilde sign means it will install the latest patch version of the package but will not update to a new minor or major version. for example if we have "is-odd": "~3.0.1" in our package.json file and the latest version of is-odd is 3.2.0 then when we run npm install it will install version 3.0.x but not 3.1.0 or 4.0.0

// package-lock.json file is automatically generated when we run npm install. it contains the exact version of each package that was installed in our project along with their dependencies. it helps in ensuring that the same versions of packages are installed when the project is set up on different machines or environments. it also helps in improving the performance of npm install by reducing the need to resolve package versions each time we run the command.