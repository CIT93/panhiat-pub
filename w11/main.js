import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
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
  //start(FNAME.value, LNAME.value, parseInt(FORM.housem.value),FORM.houses.value);
  const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.food.value)
 
  cfpData.push(fpObj);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
 } else{
  SUBMIT.textContent = "Form requires first name and last name";
 }
 
})






// const me = {
//   name: "pan", 
//   hairColor: "red", 
//   location: "office", 
//   sleepScore: 95,
//   introduce: function() {
//     console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//   }
// }

// const you = {
//   name: "ken", 
//   hairColor: "blond", 
//   location: "street", 
//   sleepScore: 95,
//   introduce: function() {
//     console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//   }
// }

// me.introduce()
// you.introduce()

class Human {
  constructor(name, hairColor, location, sleepScore){
    this.name = name
    this.hairColor = hairColor
    this.location = location
    this.sleepScore = sleepScore

  }
  introduce() {
    console.log(`this is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had sleep score ${this.sleepScore}`)

  }
}

// new prototype

const rio = new Human("Rio", "red", "office", 98 )
const Pan = new Human("Pan", "black", "school", 98 )

 rio.introduce()
// Pan.introduce()
// rio.hrv = 50;