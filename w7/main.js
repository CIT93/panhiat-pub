import { renderTbl } from "./render.js";


const FOAM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseholdPoints(numberInHousehold) {
  let household = 0;
  if (numberInHousehold === 1) {
    household = 14;
  } else if (numberInHousehold === 2) {
    household = 12;
  } else if (numberInHousehold === 3) {
    household = 10;
  } else if (numberInHousehold === 4) {
    household = 8;
  } else if (numberInHousehold === 5) {
    household = 6;
  } else if (numberInHousehold === 6) {
    household = 4;
  } else if (numberInHousehold > 6) {
    household = 2;
  } else {
    console.log("no update to points");
  }

  return household;
}

function determineHomeSize(house) {
  let householdPts = 0;
  if (house === "large") {
    householdPts = 10;
  } else if (house === "medium") {
    householdPts = 7;
  } else if (house === "small") {
    householdPts = 4;
  } else {
    householdPts = 2;
  }
  return householdPts;
}

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
  // displayObj(cfpData);
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



FOAM.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = FOAM.firstname.value;
  const lastName = FOAM.lastname.value;
  const houseMembers = parseInt(FOAM.housem.value);

  const houseSize = FOAM.housez.value;

  start(firstName, lastName, houseMembers, houseSize);
  //displayObj();
  renderTbl(cfpData);
  FOAM.reset();
});

// I tried to to create elements and create a for in loop element with objects but I got stuck on how to add the objects into the loop and textcontent.

// What is your question on module? 
// When I think of module, I think of little factory that holds functions or component.
//To bring the module you will need to use export the file by its name and then use the word import into the js file. I think its interesting that in the script tag we have to reference type=module.
// 