const cfpData = [];

function determineHouseholdPoints(numberInHousehold) {
  //console.log("inside block scope");
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
  cfpData.push([householdMem, houseSizez, homeSizePTS, houseHoldPTS, total]);
 
}

function displayOutput(){
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `Carbon Footprint total is ${arr[4]}.
    In a household member of ${arr[0]} generate carbon 
    point of ${arr[3]}. In a ${arr[1]}house size generate ${arr[2]} point.`;
    output.appendChild(newP);
  }
}
  

start(5, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");



displayOutput();