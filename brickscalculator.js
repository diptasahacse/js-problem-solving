/*
1. Bricks need 1000 per 1 feet 
2. 15feet per floor from 1 to 10th floor and 12feet per floor from 11th to 20th floor and 
10feet per floor from 21 to above floor.

WAP to calculate no of bricks needed for 75th floor.

*/

function brickCalculator(floor){
    let totalFeet = 0;
    if(!(floor < 1)){
        for(let i=1; i<=floor; i++)
        {
            if(i <= 10 ){
                totalFeet += 15;

            }
            else if(i > 10 && i <= 20){
                totalFeet+=12;

            }
            else{
                totalFeet+=10;
            }
        }

    }
    return totalFeet*1000;

}


let noOfFloor = 75;
console.log(brickCalculator(noOfFloor)+" piece Bricks needed for "+noOfFloor+" Floor");