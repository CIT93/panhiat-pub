import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import {saveLS, cfpData} from "./storage.js";



const start = (firstName, lastName, houseMembers, houseSize) => {
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

const validateField = (event) => {
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
  start(FNAME.value, LNAME.value, parseInt(FORM.housem.value),FORM.houses.value);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
 } else{
  SUBMIT.textContent = "Form requires first name and last name";
 }
 
})

const add = a => 2 + a


result = add2(1,2,3,4)

// spread argurment 
//IIFE
const a = 3;

(function (a) {
  console.log("inside IIFE");
  console.log(a);
})();