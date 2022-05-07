const cities = [
    "Seattle",
    "San Francisco",
    "Salt Lake City",
    "Amsterdam",
    "Hong Kong"
]

// method 1
for (let i=1;i<cities.length;i++){
    console.log(i+") "+cities[i].toUpperCase())
}

// method 2
numbRun = 0
cities.forEach(function(city, index){
    numbRun++
    console.log(index, numbRun+") "+city)
})