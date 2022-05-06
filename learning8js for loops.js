// tyler garrett's notes & revision for....

// for loops...

// brian holts https://frontendmasters.com/courses/web-development-v2/learning-javascript-exercise/
// the string to continue adding to frontString
const repeating = 'a'
// run loop 10 times
const amountLoops = 10
// string to put in front of the repeating string 
let frontString = 'Front_'
// setting the for loop parameters
for (let i = 0; i <=amountLoops; i++){
    // another way to concat character 1 time onto answer each pass through the loop
    // frontString = frontString + repeating

    // concat character 1 time onto answer each pass through the loop
    frontString += repeating
    //shows how character is added onto answer
    console.log(frontString)
}
// concat character 11 times onto answer
console.log(frontString += repeating)

