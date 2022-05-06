// object - uses braces {}
const person1 = {
    name:"tyler",
    ageRange: "25-35"
};

// object
const person2 = {
    name:"isa",
    ageRange: "65-75"
}

// function, uses ()
function suggestMusic(person) {
    if (person.ageRange==="25-35"){
        music1 = "daft punk"
        console.log(music1)
    } else if (person.ageRange==="65-75") {
        music2 = "Johnny Cash"
        console.log(music2)
    } else {
        music3 = "David bowie?"
        console.log(music3)
    }
}

//calls
suggestMusic(person1)
suggestMusic(person2)


// object 
// creating a dog object with two keys and a function
// each key overwrites the next if used twice
// each key must be unique (data person; column headers can't be the same, just like SQL)
// objects carry 'strings', 'numbers', booleans, functions, etc.
const dog = {
    fname:"barks",
    name:"dog",
    // a function in an object that lets the end users supply the function with what the dog is going to say
    speak(say){
        console.log(say)
    }
}

//calls
dog.speak("yark yark")
//concat dog fname into log
dog.speak(dog.fname+": yee yee")
//call dog.name from object
console.log(dog.name)

//array
const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
//call array
console.log(daysOfWeek)
//use space below to practice various ways to call daysOfWeek
//asdasd