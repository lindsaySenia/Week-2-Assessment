///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((accumulator, element) => accumulator + element.price, 0) 

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    tax *= cartTotal
    cartTotal += tax

    cartTotal -= couponValue
    let finalPrice = Number(cartTotal.toFixed(2))
    console.log(finalPrice)
}

calcFinalPrice(summedPrice, 5, 0.06)


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
// First name, last name, phone number and address are part of the contact and billing information that most businesses collect for online purchases. These would all be strings because we wouldn't need to add the number in the phone number or address. I didn't include state or zip code as part of the address because pizza places typically don't deliver too far from where they are located. Also, I don't know the zipcode to Gotham City.
I am going to include their birthday and email address as well because restaurants like to send coupons for birthdays and other promotions through emails
I'll add an option for subscription to email newsletter as a boolean. I'm also going to add loyalty points as a number that can be added or subtracted and an array of favorite items.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customerOne = {
    firstName : 'Bruce',
    lastName : 'Wayne',
    phoneNum : '735-185-7301',
    emailAdd: 'iamNOTbatman@batcave.net',
    streetAdd : '1007 Mountain Drive',
    city : 'Gotham',
    birthday : 'February 19',
    newsLett: true,
    loyaltyPts: 100,
    favFood: ["Cheese Lover's, Hawaiian, Oreo Delight"]
}
console.log(customerOne.firstName + ' ' + customerOne.lastName)