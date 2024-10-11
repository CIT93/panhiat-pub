const cfpData = getLS();

function saveLS(cfpData) {
    const serializedArr = JSON.stringify(cfpData); //user input
    localStorage.setItem("cfp", serializedArr); // what do you want to store: cfp data and set the array
}

function getLS(cfpData) {
    const retrivedArr = localStorage.getItem("cfp");
    if(retrivedArr !== null) { // go get it if there is nothing return a empty array
        return JSON.parse(retrivedArr)
    }else {
        return [];
    }
}
export {cfpData, saveLS, getLS}