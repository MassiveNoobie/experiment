// a simple temperature app
// setting the temperature 

// hot or not hot logs
hot =       "it is too damn hot for Brian Holt"
notHot =    "it is fine, based on Brian Holt"

// change this value to better understand how to control the if statement
const temperatureToday = 86
// the ifstatement condition needs to be "true" or "false" to flow to the correct log
if (temperatureToday > 85) {
    // if condition is true, log ""
    console.log(hot);
} else {
    // if condition is false, log ""
    console.log(notHot);
}