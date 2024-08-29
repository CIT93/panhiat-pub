function determineHouseholdPoints() {
  console.log("inside the function");
}

let cboFo0t = 0;
const numInHousehold = 3;

if (numInHousehold === 1) {
  console.log(cboFo0t + 14);
} else if (numInHousehold === 2) {
  console.log(cboFo0t + 12);
} else if (numInHousehold === 3) {
  console.log(cboFo0t + 10);
} else if (numInHousehold === 4) {
  console.log(cboFo0t + 8);
} else if (numInHousehold === 5) {
  console.log(cboFo0t + 6);
} else if (numInHousehold === 6) {
  console.log(cboFo0t + 4);
} else if (numInHousehold > 5) {
  console.log(cboFo0t + 2);
} else {
  console.log(
    `Based on the number of member of the household of ${numInHousehold} the points would ${cboFo0t}.`
  );
}

//global scope

determineHouseholdPoints();
