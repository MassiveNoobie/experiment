//array
const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "Friday",
]
//log array
console.log(daysOfWeek)
//log monday
console.log(daysOfWeek[0])
//log tuesday
console.log(daysOfWeek[1])
//log sunday with lower case
console.log(daysOfWeek[4].toLowerCase())

//variables to use later
const leftStart = "<[ |||   "
const rightEnd = "   ||| ]>"
const delimit = "  {}  "

//log length of array
//length is a property* doesn't require (), otherwise it's a function
console.log(daysOfWeek.length)
//log 1 string from all of the values in the days of week array, adds ability to add a delimiter
// defaults to ","
// join is a function*
console.log(daysOfWeek.join())
// swapping to pipe
console.log(daysOfWeek.join("|"))
//log days of week with a start text and end text & upper case
console.log(leftStart+daysOfWeek.join(",").toUpperCase()+rightEnd)
//log everything with upper case & using variables across everything
console.log(leftStart+daysOfWeek.join(delimit).toUpperCase()+rightEnd)




//push
daysOfWeek.push("saturday")
console.log(daysOfWeek.join("|"))
daysOfWeek.push("sunday")
console.log(daysOfWeek.join("|"))
daysOfWeek.reverse()
console.log(daysOfWeek.join("|"))
