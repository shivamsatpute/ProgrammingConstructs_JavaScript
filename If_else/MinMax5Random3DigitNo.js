let max = 100;
let min = 999;
for ( var i = 1; i<=5; i++) {
    let randomNumber= Math.floor(Math.random()*900)+100;
    console.log(+ randomNumber);
    let number = randomNumber
        if (number > max){
            max = number;
        }
        if (number < min){
            min = number;
        }
}
console.log("Minimum number is : " + min);
console.log("Maximum number is : " + max);