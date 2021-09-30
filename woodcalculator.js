/*
wood need for
1 chair = 1 cubic feet
1 table = 3 cubic feet
1 bed = 5 cubic feet

WAP to calculate how much wood is needed to make 5 chair, 4 table and 2 beds.
*/
function woodCalculator(chair, table, bed){
    return (chair*1)+(table*3)+(bed*5);
}
let chair=5;
let table=4;
let bed=2;
console.log(woodCalculator(chair,table,bed)+" cubic feet wood needed to make "+chair+ " chair, "+table+" table and "+bed+" beds");