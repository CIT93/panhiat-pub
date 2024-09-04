const cFpData = [];

function determineHouseholdPoints(numberInHousehold) {
  console.log("inside block scope");
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
  }
  console.log(
    `Based on the number of members in the household ${numberInHousehold}, the points would be ${household}.`
  );

  return household;
}

function determineHomeSize(house) {
  console.log("inside the block scope right how");
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
  console.log(
    `Based on ${house} house size, the carbon footprint points is ${householdPts}.`
  );
  return householdPts;
}

console.log("global scope");

function start(householdMem, houseSizez) {
  const homeSize = determineHomeSize(houseSizez);
  const houseHoldPTS = determineHouseholdPoints(householdMem);
  const total = homeSize + houseHoldPTS;
  cFpData.push(householdMem, houseSizez, homeSize, houseHoldPTS, total);
 
}

function displayOutput(){

}


start(5, "large");
start(2, "medium");
start(3, "large");
start(4, "medium");
start(5, "apt");
start(1, "small");
start(2, "apt");
start(3, "small");
start(1, "small");
start(5, "apt");


displayOutput()