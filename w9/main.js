import { renderTbl } from "./render.js";
import {determineHouseholdPoints, determineHomeSize } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js";
function nameValidation (first, last) {
  if (first.value < 1 || first.value > 20) {
    output.textContent = "First name is required";
    return;
  }
  if (last.value < 1 || last.value > 6 ) {
    output.textContent = "Last name is required";
    return
  }
}

function start(first, last, householdMem, houseSizez) {
  const homeSizePTS = determineHomeSize(houseSizez);
  const houseHoldPTS = determineHouseholdPoints(householdMem);
  const total = homeSizePTS + houseHoldPTS;
  nameValidation(first, last)
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

FORM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);

  const houseSize = FORM.housez.value;

  start(firstName, lastName, houseMembers, houseSize);
  saveLS(cfpData)
  //renderTbl(cfpData);
  FORM.reset();
});

