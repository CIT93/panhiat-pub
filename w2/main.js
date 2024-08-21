console.log("Hello World")
//Calculating your carbon footprint points

// 1. Count the members of your household.
const houseMembers = 4
// 2. Consider the size of your home. 
const houseSize = 4
// 3. Evaluate your food choices.
const meatEater = 10
// 4. Examine your water consumption. 
const washingMachine = 3
// 5. Determine how many household purchases you make each year.
const newPurchase = 10
// 6. Consider how much waste you produce. 
const garbageFill = 50
// 7. Identify the amount of waste that you recycle. 
const recyclePlastic = 20
// 8. Tally up your annual transportation scores. 
const vehicleUsage = 30
// 9. Add up your points. 
const totalCarbon = houseMembers + houseSize + meatEater + washingMachine + newPurchase + garbageFill + recyclePlastic + vehicleUsage;
// 10. Write JS to update the rendered html (index.html) with total footprint
document.querySelector("h2").innerText = 'My carbon footPrint is ' + totalCarbon;