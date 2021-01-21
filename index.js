var readlineSync = require("readline-sync");
var chalk = require("chalk");

var name= readlineSync.question(chalk.green("Enter your name: "))

console.log("Hello " + chalk.yellow(name) + ", Let's check if you were born in a leap year!!\n" )

function leap() {
  var birthdate = readlineSync.question(chalk.green("Enter your birthdate in DD/MM/YYYY format: "));

  var split= birthdate.split('/');
  var day = split[0];
  var month = split[1];
  var year = split[2];

  if(day<=0 || day>31 || isNaN(day) || isNaN(month) || isNaN(year) || month<=0 || month>12 || (month==02 && (day==30 || day==31))) {
      console.log(chalk.red("Please enter a valid date"));
      leap();
  }

  if(year%4===0) {
    if(year%100===0){
      if(year%400===0){
        console.log(chalk.bgBlue("You were born in a leap year"))
      }
    }
  }
  else if(year === undefined){
    console.log("")
  }
  else {
    console.log(chalk.bgCyan("You were not born in a leap year"));
  }
  // console.log(birthdate); 
}
leap();