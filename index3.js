//Create the logic for checkout system that returns 
//the total cost of all refills 
//including if the customer has a subscription 
//and/or a coupon.

//If a customer has a subscription, 
//the customer will receive a 25% discount 
//If the customer has a coupon, the customer will receive a $10 discount after the subscription discount 
//At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

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


function calculatedTotal(customer) {
    let refillCost = customer.pricePerRefill * customer.refills;
   
    // 25% discount for customers wiht a subscription
    if (customer.subscription) {
       return .75; }
        return 1;
}
    //$10 off for customers with coupon
    if(customer.coupon) {
        return -10; }
        return 0;
    


    const timmyTotal = calculatedTotal(timmy);
    const sarahTotal = calculatedTotal(sarah);
    const rockyTotal = calculatedTotal(rocky);

    const finalAmount1 = timmyTotal 
    const finalAmount2 = sarahTotal 
    const finalAmount3 = rockyTotal;
    
    
    console.log(`${timmyTotal} Your grand total is ${finalAmount1}.`);
    console.log(`${sarahTotal} Your grand total is ${finalAmount2}.`);
    console.log(`${rockyTotal} Your grand total is ${finalAmount3}.`);

