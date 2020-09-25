var originalFlavors = [
	"Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"]


// Part of Task 6 to backup original flavor menu
const origFlavsBackup = copy(originalFlavors, []);

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

function is31Flavors(menu) {

	// gets length of incoming array and returns true if === 31
	let len = menu.length;
	if (len === 31) {
		return true;
	} else {
		return false;
	}

}

console.log(is31Flavors(originalFlavors))

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(currMenu, newFlav) {

	// add new flavor to front of array
	currMenu.unshift(newFlav);
	// console.log new array
	console.log(currMenu);

}

addFlavor(originalFlavors, "Rainbow Sherbert")

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/

function removeLastFlavor(currMenu) {

	// remove last item from array
	currMenu.pop();
	// console.log new array
	console.log(currMenu);

}

removeLastFlavor(originalFlavors)

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(menu, index) {

	return menu[index];

}

console.log(getFlavorByIndex(originalFlavors, 2))

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName(menu, flavor) {

	// finds the flavor by name and saves the index to a variable
	const flavIndex = menu.indexOf(flavor);
	// splices out the flavor using saved inex
	menu.splice(flavIndex, 1);
	// returns new array
	return menu;

}

console.log(removeFlavorByName(originalFlavors, "French Vanilla"));

/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

function copy( origArray, newArray ) {

	// creates a clone of origArray and stores in newArray
	newArray = [...origArray]
	return newArray
	
	// new array is declared and function is called on line 34 to truly capture the original array before tasks 1-5 run on it.

}


console.log(origFlavsBackup);

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(array, string) {

	// declare empty array
	const filteredArray = []
	
	
	// for each index in the array this statement will check whether it includes the passed in string.
	// if it does it will push the element to our new array declared above.
	for (const index in array) {
		if (array[index].includes(string)) {
			filteredArray.push(array[index]);
			}
	}
	return filteredArray
}

// saves resulting array from function to a variable
const chocFlavs = filterByWord(originalFlavors, "Chocolate")

console.log(chocFlavs)

/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(array) {

	// declare variables to be added to
	let totalWords = 0
	let totalItems = 0

	for (let index in array) {
		// for each index, split each word to elements in an array
		let words = array[index].split(" ");
		// add the number of indexes (words) to the words variable
		totalWords = totalWords + words.length;
		// add 1 to the number of items
		totalItems++;
		
	}
	// divide to get average
	return totalWords / totalItems
	
}

console.log(getAverageWordLength(origFlavsBackup))


/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"]
var seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango", ]
var regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(menu1, menu2, menu3) {
	
	//combine all menu items in one array
	const allFlavors = menu1.concat(menu2, menu3)
	//declare empty array
	const newMenu = []
	
	//until the length of newMenu reaches 31 flavors...
	while (newMenu.length < 31) {
		//store a random number between 0 and 70 in a variable
		const index = Math.floor(Math.random() * 71);
		//if the value of the chosen index already exsist in newMenu
		if (newMenu.includes(allFlavors[index])) {
			//do nothing
		} else {
			//otherwise, push the element to newMenu
			newMenu.push(allFlavors[index])
		}
	}
	//return the new array of 31 random items
	return newMenu
}

console.log(getRandomFlavors(newFlavors, seasonalFlavors, regionalFlavors))










