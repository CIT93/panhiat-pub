const FORM = document.getElementById("form");
const WORKOUT = document.getElementById("exercise");
const REP = document.getElementById("rep");
const MINUTE = document.getElementById("min");

function display() {
    
    const newP = document.createElement("p");
    newP.textContent = `Start ${exerciseType} exercise. The goal is ${rep} reps in ${minute}.`
    const newH3 = document.createElement("h3");
    newH3.textContent = `End ${exerciseType} exercise`
    const output = document.getElementById("output")
    output.appendChild(newP)
    output.appendChild(newH3)
    
}

FORM.addEventListener("submit", e => {
    e.preventDefault();
    const workOut = Form.WORKOUT.value;
    const rep = Form.REP.value;
    const time = Form.MINUTE.value; 


    display();
    FORM.reset();
})