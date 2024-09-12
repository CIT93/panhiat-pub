
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


  // const cfpObj= {
  // members: householdMem,
  // size: houseSizez,
  // houseHPts: houseHoldPTS,
  // homeZPts: homeSizePTS,
  // cfpTotal: total,
  // };

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


function displayObj(obj) {
  for (obj of cfpData) {
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = ` Carbon Footprint total: ${obj.cfpTotal}`;
  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on number in and size of home`;
  const newP = document.createElement("p"); 
  newP.textContent = `This number is based on the number of people in the house of ${obj.members}; (score: ${obj.homeZPts})`;
  newP.textContent += `and a ${obj.size} size of home (score:${obj.homeZPts}).`;
  output.appendChild(newH2)
  output.appendChild(newH3)
  output.appendChild(newP)
  }
  
}

start(5, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(3, "large");
start(1, "medium");
start(5, "small");
start(2, "apt");

console.log(cfpData);

displayObj();