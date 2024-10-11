import { renderTbl } from "./render.js";
import {determineHouseholdPoints, determineHomeSize } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData,  } from "./storage.js";

const firstNameEl = document.getElementById("firstName");
const lastNameEl = document.getElementById("lastName");
const submit = document.getElementById("submiterror")

function start(first, last, householdMem, houseSizez) {
  const homeSizePTS = determineHomeSize(houseSizez);
  const houseHoldPTS = determineHouseholdPoints(householdMem);
  const total = homeSizePTS + houseHoldPTS;
 cfpData.push({
    firstName: first,
    lastName: last,
    members: householdMem,
    size: houseSizez,
    houseHPts: houseHoldPTS,
    homeZPts: homeSizePTS,
    cfpTotal: total,
  });
};

function displayObj() {
  const output = document.getElementById("output");

  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total: ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on ${obj.firstName} ${obj.lastName} number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the amount of people in the house 
  of ${obj.members} (score: ${obj.houseHPts})`;
    newP.textContent = `and a ${obj.size} size of home (score:${obj.homeZPts}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}


renderTbl(cfpData);

  // Function to validate a single field
function validateField(event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = "";
      event.target.classList.remove('invalid');
  }
};

//Attach blur event listeners
firstNameEl.addEventListener("blur", validateField);
lastNameEl.addEventListener("blur", validateField);




FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !== '';
  const lastNameIsValid = lastNameEl.value !== '';
  if (firstNameIsValid && lastNameIsValid) {
    submitError.textContent = "Form requires first name and last name.";
    return
  }
    submit.textContent = '' ;
    const houseMembers = parseInt(FORM.housem.value);
    const houseSize = FORM.houseS.value;
    start(firstName, lastName, houseMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
});
// start(firstName, lastName, houseMembers, houseSize);
