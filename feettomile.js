function feetToMile(feet){
    return feet/5280;

}
let inputFeet = 1845586;
console.log(inputFeet +" feet = "+feetToMile(inputFeet).toFixed(8)+" Miles")