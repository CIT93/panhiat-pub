

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


export {determineHouseholdPoints, determineHomeSize}