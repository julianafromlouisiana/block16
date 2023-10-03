const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//In individual functions
//Function should only do one task
//Return of functions should be stored in a variable for the rest of the functions

const timmyTotalCost = medsTotalCost(timmy);



function medsTotalCost(person) {

let totalCost = person.pricePerRefill * person.refills;

if (person.subscription) {
    totalCost1 *= .25;
}

if (person.coupon) {
    totalCost -= 10;
}
return totalCost;

}

console.log("Your grand total is: $" + timmyTotalCost);


const sarahTotalCost = medsTotalCost(sarah);


function medsTotalCost(person) {

let totalCost = person.pricePerRefill * person.refills;

if (person.subscription) {
    totalCost *= .25;
}

if (person.coupon) {
    totalCost -= 10;
}
return totalCost;

}

console.log("Your grand total is: $" + sarahTotalCost);



const rockyTotalCost = medsTotalCost(rocky);


function medsTotalCost(person) {

let totalCost = person.pricePerRefill * person.refills;

if (person.subscription) {
    totalCost *= .25;
}

if (person.coupon) {
    totalCost -= 10;
}
return totalCost;

}

console.log("Your grand total is: $" + rockyTotalCost);