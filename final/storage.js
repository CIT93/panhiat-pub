
const saveLS = choreData => {
    const serializedArr = JSON.stringify(choreData); //user input
    localStorage.setItem("chore", serializedArr)
}

const getLS = () => {
    const retrivedArr = localStorage.getItem("chore")
    if (retrivedArr !== null) {
        return JSON.parse(retrivedArr)
    } else {
        return [];
    }
}

const choreData = getLS();
export { saveLS, getLS }
