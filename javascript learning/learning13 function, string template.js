// variables used in function but not in the call
// const classification='Division'
// const actionVerb = 'extreme'

// variables used in function and used in the call
const division = 'Fart Smelling'
const emailAlias = 'google'

// creating a function
function greet(firstName, lastName, honorific, greeting, email, divisionName){
    // adding classifcations and actionverb here would keep it in scope in this function only
    const classification='Division'
    const actionVerb = 'extreme'
    
    return `${greeting} ${honorific} of the ${actionVerb} ${divisionName} ${classification},
Enjoy your day ${lastName}.${firstName}@${email}.com`
}

console.log(greet("tyler","garrett","Lord","Salutations", emailAlias, division))