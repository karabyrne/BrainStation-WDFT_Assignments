
/* Instructions: For this assignment, you will be writing functions to generate a 
JavaScript restaurant. You can start by downloading the starter code here. The starter 
code contains a function that returns a menu array. This menu array contains the items 
that the restaurant can serve. Each menu item object will have a name, price, and a 
time property.

This challenge will require you to write 3 functions. These functions will accept a 
user's order, cook the specified meal, and then serve the meal. For this assignment, 
all meals will consist of 3 items, a main dish, a side dish, and a drink.

JavaScript restaurantuse the generateMenu() function to get a menu object when you need it
This is a test order. It should take 8 seconds and should cost $65.
You can also test your restaurant functions with other menu items.
order('Lobster','Wild Rice','Wine') 

The first function will be the 'order' function, which should take in 3 parameters, 
the main, side, and drink. If these 3 arguments are provided by a user, then the order 
function will call the next function, the cook function, with the 3 items as arguments.
If less than 3 arguments are provided, then the function should display an error and 
ask the user to order again. */

// WRITE YOUR CODE BELOW
// Order Function Here:

var menuObject = generateMenu(); 

order("Pizza", "Fries", "Pop")

function order(main, side, drink){
    let orderedItems = 0;
    for(let i = 0; i < menuObject.length; i++){
            // Would normally use prompt instead of console.log below 
        if((menuObject[i].name === main) || (menuObject[i].name === side) || (menuObject[i].name === drink)){
                orderedItems++;
        }
    }
        if(orderedItems === 3){
                cook(main, side, drink);
        }
        else {
                console.log("Please order again.")
        }
};

// The second function will be the 'cook' function, which again will take in the 3 
// meal parameters. This function will need to look through the restaurant's menu and 
// determine the total time it will take to prepare the 3 items that were ordered. Once 
// the total time has been determined, the function should tell the user how much time it 
// will take to prepare the meal, and then wait that amount of time in seconds. After 
// that, the 'serve' function will be called with the 3 meal items as arguments.

// Cook Function Here:

// var mainTime, sideTime, drinkTime;

function cook(main, side, drink){
    let totalTime = 0;
    for(let i = 0; i < menuObject.length; i++){
        if((menuObject[i].name === main) || (menuObject[i].name === side) || (menuObject[i].name === drink)){
            totalTime += menuObject[i].time
        }
        //  if(generateMenu()[i].name === side){
        //     totalTime = generateMenu()[i].time
        // }
        // //  if(generateMenu()[i].name === drink){
        //     totalTime += generateMenu()[i].time
        // }
    }
    console.log("Your meal will take " + totalTime + " minutes to prepare.");
    setTimeout(function(){serve(main, side, drink)}, 5000);
        // setTimeout(serve, 5000);
};

// The final 'serve' function will need to take in the 3 meal parameters, and loop 
// through the menu to find out the total price of all 3 menu items. The function should
//  log that the meal is ready to serve, and also inform the user what the price of the 
//  meal will be.

// Serve Function Here:

// var mainPrice, sidePrice, drinkPrice;


function serve(main, side, drink){
    let totalPrice = 0;
    for(let i = 0; i < menuObject.length; i++){
        // totalPrice = (mainPrice + sidePrice + drinkPrice);
        if((menuObject[i].name === main) || (menuObject[i].name === side) || (menuObject[i].name === drink)){
            totalPrice += menuObject[i].price
        }
        //  if(menuObject[i].name === side){
        //     totalPrice = menuObject[i].price
        // }
        //  if(menuObject[i].name === drink){
        //     drinkPrice = menuObject[i].price
        // }
    }
    console.log("Your meal is ready to serve. The total price will be $" + totalPrice + ".");
};



// function that returns a menu array, no need to modify this function
function generateMenu (){
    return [{
        name:'Steak',
        time:5,
        price:40
    },{
        name:'Burger',
        time:4,
        price:15
    },{
        name:'Shawarma',
        time:4,
        price:20
    },{
        name:'Pizza',
        time:3,
        price:10
    },{
        name:'Sushi',
        time:3,
        price:15
    },{
        name:'Lobster',
        time:5,
        price:50
    },{
        name:'Carpaccio',
        time:5,
        price:25
    },{
        name:'Chicken',
        time:4,
        price:10
    },{
        name:'Wild Rice',
        time:2,
        price:5
    },{
        name:'Fries',
        time:1,
        price:5
    },{
        name:'Baked Potato',
        time:1,
        price:5
    },{
        name:'Salad',
        time:1,
        price:5
    },{
        name:'Coffee',
        time:1,
        price:0
    },{
        name:'Tea',
        time:1,
        price:0
    },{
        name:'Pop',
        time:1,
        price:0
    },{
        name:'Beer',
        time:1,
        price:5
    },{
        name:'Wine',
        time:1,
        price:10
    }]
}