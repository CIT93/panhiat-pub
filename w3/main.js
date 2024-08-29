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
        console.log("Not a valid number of household members.");
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