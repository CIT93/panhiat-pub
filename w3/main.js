let cboFo0t = 0;

function determineHouseholdPoints(numberInHousehold) {
    if (numberInHousehold === 1) {
        cboFo0t += 14;
    } else if (numberInHousehold === 2) {
        cboFo0t += 12;
    } else if (numberInHousehold === 3) {
        cboFo0t += 10;
    } else if (numberInHousehold === 4) {
        cboFo0t += 8;
    } else if (numberInHousehold === 5) {
        cboFo0t += 6;
    } else if (numberInHousehold === 6) {
        cboFo0t += 4;
    } else if (numberInHousehold > 6) {
        cboFo0t += 2;
    } else {
        ("Not a valid number of household members.");
        return;
    }

    console.log(`Based on the number of members in the household (${numberInHousehold}), the points would be ${cboFo0t}.`);
}

// Example usage
determineHouseholdPoints(3);  
determineHouseholdPoints(4);  


/*Notes on Fuction can be executed by the function name. It takes in a parameter
we can give it argument. determineHouseholePoints() this is calling the function. 
less variable on global scope */


/*Consider the size of your home. A smaller home makes a smaller impact on the environment. Take the size of your home into account as you calculate your impact.[2]
If you have a large house, then add 10 points to your score.
If you have a medium-sized house, then add 7 points.
If you have a small house, then add 4 points.
If you live in an apartment, then add 2 points.*/

let carFo = 0;
// const house = "medium";

function determineHomeSize(house) {
  if (house === "large") {
    carFo += 10;
  } else if (house === "medium") {
    carFo += 7;
  } else if (house === "small") {
    carfo += 4;
  } else {
    carfo += 2;
  }
  console.log(
    `Based on ${house} house size, the carbon footprint points is ${carFo}.`
  );
}

determineHomeSize("medium");

