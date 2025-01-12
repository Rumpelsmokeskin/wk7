/* I am using const for the array so that the array cannot change to another type of variable, but I can still change the values of the array */
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

/* I'm using the .length method -1 to reference the last item in the array and subtracting element 0 (1) from the last element */
console.log((ages[ages.length - 1]) - ages[0]);

/*addind the value 30 to the end of the array*/
ages.push(30);

console.log(ages)

/*tried again to check if dynamic after push */
console.log((ages[ages.length - 1]) - ages[0]);

/*declared variable sum to zero and for each "for loop" iteration I add the referenced array index to the previous value.  The loop repeats as long is the value is less than the array length */
let sum = 0;
for (let i= 0; i < ages.length; i++ ){
    sum += ages[i];
}

/*this console.log prints out the sum divided by the total number of items in the array */

console.log(sum / ages.length);

/* access the last element of an array */

console.log(ages[ages.length -1]);

/* access the first element of an array */

console.log(ages[0]);

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalCharacters = 0;
for(i = 0 ; i < names.length; i++){
 totalCharacters += names[i].length;

}

console.log(totalCharacters / names.length);

console.log(names[1]);
console.log(names[names.length -1]);

let concatNames = "";
for(let i = 0; i< names.length; i++){
concatNames = concatNames.concat(names[i] + " ");
}
console.log(concatNames)

const nameLengths = [];
let currentLength = 0;
for (i = 0; i < names.length; i++){
currentLength = names[i].length;
nameLengths[i] = currentLength;
console.log(nameLengths);
}

let nameLengthSum = 0;
for(i=0; i<nameLengths.length; i++){
nameLengthSum += nameLengths[i];
console.log(nameLengthSum);
}
let tempWord = "";
const concatFunction = (word, n) => {
    for(i=0; i<n;i++){
        tempWord += word;
    }
    return tempWord;
}
console.log(concatFunction(`hey`,5));

let fullName = "";
const fullNameFunction = (firstName, lastName) => {
    fullName = `${firstName} ${lastName}`;
    return fullName;
}
console.log(fullNameFunction(`Josh`, `Watkins`));

const sumArray = [5, 15, 45, 4, 83];
let sumArrayAverage = 0;
const averageArrayFunction = (array) => {
    for (let i =0; i< array.length;i++){
        sumArrayAverage += array[i];
        }
        sumArrayAverage =(sumArrayAverage / array.length);
    return sumArrayAverage;
}
console.log(averageArrayFunction(sumArray));

const sumArray1 = [3, 4, 7, 10, 24];
const sumArray2 = [6, 10, 15, 5, 6];
let sumArrayAverage1 = 0;
let sumArrayAverage2 = 0;

const averageArrayCompareFunction = (array1, array2) => {
    for (let i =0; i< array1.length;i++){
        sumArrayAverage1 += array1[i];
        }
        sumArrayAverage1 =(sumArrayAverage1 / array1.length);
   
    
    for (let i =0; i< array2.length;i++){
        sumArrayAverage2 += array2[i];
        }
        sumArrayAverage2 =(sumArrayAverage2 / array2.length);
   
        if (sumArrayAverage1 > sumArrayAverage2){
            return true;
        }else {
            return false;
        }
}
console.log(averageArrayCompareFunction(sumArray1, sumArray2));

const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.5){
        return true;
    }else{
        return false;
        }
    }

    console.log(willBuyDrink(true, 100));


    let TGprofile = "horizontal";
    let saunaHeight = 84;
    let saunaWidth = 84;
    let saunaDepth = 84;
    let ceilingDirection = "l/r";
    let woodCoverage = 4.2;
    
    
    
    const lumberCount = (walls, height, width, depth, ceiling, coverage) =>{
    
        let sideWalls = 0;
        let frontBackWalls = 0;
        let ceilingBoards = 0;
        let finalOutput = "";
        let percentage = 15;
    
        if(walls === "horizontal" || "vertical"){
            switch (walls){
                case "horizontal":
                    sideWalls = (height / coverage) * 2;
                    sideWalls = sideWalls + (sideWalls * (percentage / 100));
                    frontBackWalls = (height / coverage) * 2;
                    frontBackWalls = frontBackWalls + (frontBackWalls * (percentage / 100));
                    console.log(`The amount of boards needed for the side walls is ${sideWalls} and the front and back walls boards needed is ${frontBackWalls}`);
                    break;
                
                case "vertical":
                    sideWalls = (depth / coverage) *2;
                    sideWalls = sideWalls + (sideWalls * (percentage / 100));
                    frontBackWalls = (width / coverage) *2;
                    frontBackWalls = frontBackWalls + (frontBackWalls * (percentage / 100));
                    console.log(`The amount of boards needed for the side walls is ${sideWalls} and the front and back walls boards needed is ${frontBackWalls}`);
                    break;
                
                default:
                    console.log(`Error, wrong wall input value`);
                }
            }
            
        
        if(ceilingDirection === `l/r` || 'f/b'){
            switch(true){
                case ceiling == `l/r`:
                    ceilingBoards = (depth / coverage);
                    ceilingBoards = ceilingBoards + (ceilingBoards * (percentage / 100));
                    console.log(`The needed amount of ceiling boards is ${ceilingBoards}`);
                    break;
                
                case ceiling == `f/b`:
                    ceilingBoards = (width / coverage);
                    ceilingBoards = ceilingBoards + (ceilingBoards * (percentage / 100));
                    console.log(`The needed amount of ceiling boards is ${ceilingBoards}`);
    
                default:
                
                }
        }else {
            console.log('Error, wrong ceiling input value');
        }
             return finalOutput = `The total amount of boards required:
             Walls boards (L/R): ${sideWalls}
             Wall boards (F/B): ${frontBackWalls}
             Ceiling boards: ${ceilingBoards}`
    }
        console.log(lumberCount(TGprofile, saunaHeight, saunaWidth, saunaDepth, ceilingDirection, woodCoverage));
    