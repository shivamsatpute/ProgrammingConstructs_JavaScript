readline=require("readline-sync")
let n = readline.question("Enter a number : ")
let sum = 0
for (let i = 0; i <= n ; i++) {
    div=1/i ;
    sum = sum + div;
}
console.log("The sum is :  " +sum);