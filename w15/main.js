import {renderTbl} from "./render.js";
// import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import {saveLS, cfpData} from "./storage.js";
import { FP } from "./fp.js";


const start = (firstName, lastName, houseMembers, houseSize)=> {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);


FORM.addEventListener("submit", e => {
  e.preventDefault();

 if (FNAME.value !== '' && LNAME.value !== '') {
  SUBMIT.textContent = '';
  const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value);
  cfpData.push(fpObj);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
 } else{
  SUBMIT.textContent = "Form requires first name and last name";
 }
 })


// Async js

// let pizza 
// function orderPizza() {
//   console.log("order pizza")
//   setTimeout(() => {
//      pizza = `🍕`
//     console.log(`${pizza} is ready`)
//     }, 2000)
//   console.log("Pizza was ordered")
// }

// orderPizza()
// console.log(`Eat ${pizza}`)


// //callback

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback(pizza)
//   }, 2000)
// }

// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`)
// }
 
// orderPizza(pizzaReady)
// console.log(`call paul`)

// window.addEventListener("click", function() {
//   console.log("click")
// })
// //rewrite above function
// window.addEventListener("click", callback) 
//   function callback() {
//     console.log("clicked")
//   }

// //callback hell
// //three items to call back 
// // call shop, orderpizza, eat pizza

// function thing1() {
//   //call the pizza shop callback()
// }

// function thing2() {
//   //order pizza callback()
// }

// function thing3() {
//   //eat pizza callback
// }

// //callback hell

// //thing1() => {thing2(() => {think3()}) }

// //Async example Data fetching calling backend api loading files, timers and intervals