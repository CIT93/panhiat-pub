import {renderTbl} from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, TBL} from "./global.js";
import {saveLS, cfpData} from "./storage.js";

const firstNameEL= document.getElementById('firstName');
const lastNameEL= document.getElementById('lastName');
const submitEL= document.getElementById('submitError');


function start(firstName, lastName, houseMembers, houseSize) {
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

function validateField(event) {
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
firstNameEL.addEventListener('blur', validateField);
lastNameEL.addEventListener('blur', validateField);



FORM.addEventListener("submit", function(e){
  e.preventDefault();
 const firstName = FORM.firstname.value;
 const lastName = FORM.lastname.value;
 const firstNameIsValid = firstNameEL.value !== '';
 const lastNameIsValid = lastNameEL.value !== '';
 if (firstNameIsValid && lastNameIsValid) {
  submitEL.textContent = '';
  const houseMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize);
  saveLS(cfpData);
  renderTbl(cfpData);
  FORM.reset();
 } else{
  submitEL.textContent = "Form requires first name and last name";
 }
 
})


