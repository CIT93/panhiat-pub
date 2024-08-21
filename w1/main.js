console.log("Hello World");

const myVar = "Panhia";
const myVarType = typeof(myVar);
console.log('myVartype' + myVarType);
console.log(`myVarType $(myVarType)`);

function runNow () {
    if(myVarType === "number") {
        console.log(`will 11 this one run?`);
    } else {
        console.log(`will 13 this one run`);
    }
}

runNow()
runNow()