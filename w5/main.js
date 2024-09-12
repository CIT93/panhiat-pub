
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
    console.log("no update to points")
  }

  return household;
}

function determineHomeSize(house) {
  //console.log("inside the block scope right how");
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


function start(householdMem, houseSizez) {
  const homeSizePTS = determineHomeSize(houseSizez);
  const houseHoldPTS = determineHouseholdPoints(householdMem);
  const total = homeSizePTS + houseHoldPTS;


  cfpData.push({
  members: householdMem,
  size: houseSizez,
  houseHPts: houseHoldPTS,
  homeZPts: homeSizePTS,
  cfpTotal: total,
  });

  // displayObj(cfpObj)
  //return this.total;

}


function displayObj() {
  
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = ` the total: ${cfpObj.cfpTotal}`
  const newH3 = document.createElement("h3");
  newH3.textContent = `Members: ${cfpObj.members}, score: ${cfpObj.houseHPts}`
  const newP = document.createElement("p"); 
  newP.textContent = `Home size: ${cfpObj.size}, score: ${cfpObj.homeZPts}  `;
  output.appendChild(newH2)
  output.appendChild(newH3)
  output.appendChild(newP)
}

start(5, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(3, "large");
start(1, "medium");
start(5, "small");
start(2, "apt");

console.log(cfpData)