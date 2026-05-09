console.log("Test")


let plants = 20;
let radius = 5
let weeks = 1
let totalPlants = plants*2**weeks

console.log(radius);
const PI = 3.1415;
const area = PI * radius * radius;

console.log(area);

const minSpace = .8;

const capacity = area/minSpace

console.log(capacity);

console.log(capacity*.8)

if (totalPlants > capacity*.8){
    console.log("Pruned");
} else if (totalPlants > capacity*.5){
    console.log("Monitored");
}
else {
    console.log("Plant");
}

weeks = 2
totalPlants = plants*2**weeks

if (totalPlants > capacity*.8){
    console.log("Pruned");
} else if (totalPlants > capacity*.5){
    console.log("Monitored");
}
else {
    console.log("Plant");
}

weeks = 3
totalPlants = plants*2**weeks

if (totalPlants > capacity*.8){
    console.log("Pruned");
} else if (totalPlants > capacity*.5){
    console.log("Monitored");
}
else {
    console.log("Plant");
}

plants = 100
weeks = 10
totalPlants = plants*2**weeks

console.log(totalPlants);
let additionalSpace = totalPlants*minSpace
console.log(additionalSpace);

// The area is starting with 20 plants.
// The plants double in number every week.
// If start with 100 plants and do not prune for 10 weeks,
// how big does garden need to be