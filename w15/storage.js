 //const cfpData = getLS();

const saveLS = cfpData => {
    const serializedArr = JSON.stringify(cfpData); //user input
    localStorage.setItem("cfp", serializedArr); // what do you want to store: cfp data and set the array
}

const getLS = cfpData => {
    const retrivedArr = localStorage.getItem("cfp")
    if(retrivedArr !== null) { // go get it if there is nothing return a empty array
        return JSON.parse(retrivedArr)
    }else {
        return [];
    }
}

const cfpData = getLS();
export {cfpData, saveLS, getLS}